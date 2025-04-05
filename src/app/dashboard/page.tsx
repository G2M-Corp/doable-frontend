"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Rocket, Trash2, CheckCircle2, Circle, Info } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "sonner";
import { CircularProgress } from "@/components/ui/circular-progress"
import { motion } from "framer-motion"
import { API_BASE_URL } from "../../lib/baseUrls";

type Task = {
    id: string
    title: string
    completed: boolean
    category?: string
}

type Category = {
    id: string
    name: string
    color: string
}

export default function DashboardPage() {
    const [isLoadingCategories, setIsLoadingCategories] = useState(true)
    const [isCreatingCategory, setIsCreatingCategory] = useState(false)
    const [userData, setUserData] = useState<any>(null)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) return

        fetch(`${API_BASE_URL}/api/categorias/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Erro ao buscar categorias")
                return res.json()
            })
            .then((data) => {
                const categorias = Array.isArray(data.results) ? data.results : data

                const formatted = categorias.map((cat: any) => ({
                    id: cat.id.toString(),
                    name: cat.nome,
                    color: cat.cor,
                }))
                setCategories(formatted)
            })

            .catch((err) => {
                console.error(err)
                toast("Erro ao carregar categorias.", {
                    duration: 2000,
                    style: { backgroundColor: "#f87171", color: "#fff" },
                })
            })
            .finally(() => setIsLoadingCategories(false))
    }, [])


    const getAvatarUsername = (name: string): string => {
        const parts = name.trim().split(" ")
        if (parts.length === 1) {
            return parts[0][0]
        } else {
            return `${parts[0][0]}${parts[1][0]}`
        }
    }

    const [tasks, setTasks] = useState<Task[]>([
        { id: "1", title: "Finalizar proposta de projeto", completed: false, category: "trabalho" },
        { id: "2", title: "Comprar mantimentos", completed: true, category: "pessoal" },
        { id: "3", title: "Agendar reunião com equipe", completed: false, category: "trabalho" },
        { id: "4", title: "Pagar contas do mês", completed: false, category: "finanças" },
        { id: "5", title: "Preparar apresentação", completed: false, category: "trabalho" },
    ])

    const [newTask, setNewTask] = useState("")
    const [newTaskCategory, setNewTaskCategory] = useState("")

    const [categories, setCategories] = useState<Category[]>([])

    const [newCategory, setNewCategory] = useState("")
    const [newCategoryColor, setNewCategoryColor] = useState("#4f46e5")

    const toggleTaskCompletion = (id: string) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
    }

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const addCategory = async () => {
        if (newCategory.trim() === "") return

        const categoryExists = categories.some(
            (category) => category.name.toLowerCase() === newCategory.toLowerCase()
        )
        if (categoryExists) {
            toast("Essa categoria já existe!", {
                duration: 2000,
                style: { backgroundColor: "#f87171", color: "#fff" },
                icon: <Info className="h-5 w-5" />,
            })
            return
        }

        const token = localStorage.getItem("token")
        const randomDescription = Math.random().toString(36).substring(2, 14)

        setIsCreatingCategory(true)

        try {
            const res = await fetch(`${API_BASE_URL}/api/categorias/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    nome: newCategory,
                    descricao: randomDescription,
                    cor: newCategoryColor,
                }),
            })

            if (!res.ok) throw new Error("Erro ao criar categoria")

            const created = await res.json()

            const category: Category = {
                id: created.id.toString(),
                name: created.nome.toLowerCase(),
                color: created.cor,
            }

            setCategories([category, ...categories])
            setNewCategory("")
            setNewCategoryColor("#4f46e5")

            toast("Categoria criada com sucesso!", {
                duration: 2000,
                style: { backgroundColor: "#4ade80", color: "#000" },
            })
        } catch (error) {
            console.error(error)
            toast("Erro ao criar categoria!", {
                duration: 2000,
                style: { backgroundColor: "#f87171", color: "#fff" },
            })
        } finally {
            setIsCreatingCategory(false)
        }
    }

    const addTask = () => {
        if (newTask.trim() !== "") {
            const task: Task = {
                id: Date.now().toString(),
                title: newTask,
                completed: false,
                category: newTaskCategory || undefined,
            }
            setTasks([task, ...tasks])
            setNewTask("")
            setNewTaskCategory("")
        }
    }

    const deleteCategory = async (id: string) => {
        const token = localStorage.getItem("token")
        if (!token) return

        setIsLoadingCategories(true)

        try {
            const res = await fetch(`${API_BASE_URL}/api/categorias/${id}/`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            if (!res.ok) throw new Error("Erro ao deletar categoria")

            setCategories(categories.filter((category) => category.id !== id))
            setTasks(
                tasks.map((task) => {
                    const category = categories.find((c) => c.id === id)
                    if (category && task.category === category.name) {
                        return { ...task, category: undefined }
                    }
                    return task
                }),
            )

            toast("Categoria deletada com sucesso!", {
                duration: 2000,
                style: { backgroundColor: "#4ade80", color: "#000" },
            })
        } catch (error) {
            console.error(error)
            toast("Erro ao deletar categoria.", {
                duration: 2000,
                style: { backgroundColor: "#f87171", color: "#fff" },
            })
        } finally {
            setIsLoadingCategories(false)
        }
    }


    const getHexColorByCategoryName = (categoryName: string) => {
        const category = categories.find((cat) => cat.name === categoryName)
        return category ? category.color : "#000000"
    }

    const totalTasks = tasks.length
    const completedTasks = tasks.filter((t) => t.completed).length

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <header className="border-b border-border">
                <div className="container flex h-16 items-center justify-between px-4 py-4 md:px-6">
                    <div className="flex items-center gap-2">
                        <Rocket className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold">Doable</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
                                    {userData ? (
                                        <Image
                                            src={`https://avatar.iran.liara.run/username?username=${getAvatarUsername(userData.name)}`}
                                            alt="Avatar do usuário"
                                            width={32}
                                            height={32}
                                            className="h-8 w-8 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
                                    )}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                    <Link href="/login" className="w-full">
                                        Sair
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
            <div className="flex flex-1">
                <aside className="hidden w-64 flex-col border-r border-border bg-muted/40 md:flex">
                    <div className="mt-4 px-4">
                        <h3 className="mb-2 text-sm font-medium">Categorias</h3>
                        {categories.length > 0 ? (
                            <div className="space-y-1">
                                {categories.map((category) => (
                                    <div
                                        key={category.id}
                                        className="flex items-center justify-between rounded-md px-2 py-1 hover:bg-muted"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div 
                                                className={`h-3 w-3 rounded-full`} 
                                                style={{ backgroundColor: category.color }} />
                                            <span className="text-sm capitalize">{category.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">Nenhuma categoria disponível.</p>
                        )}
                    </div>
                </aside>
                <main className="flex-1 overflow-auto p-4 md:p-6">
                    <div className="mx-auto max-w-5xl space-y-6">
                        <Tabs defaultValue="tasks" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="tasks" className="text-sm">
                                    Tarefas
                                </TabsTrigger>
                                <TabsTrigger value="categories" className="text-sm">
                                    Categorias
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="tasks">
                                <motion.div
                                    key="tasks"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                <Card className="border border-border h-[calc(100vh-157px)] flex flex-col">
                                    <CardHeader className="sticky top-0 bg-background z-10 flex flex-row items-start justify-between">
                                        <div>
                                            <CardTitle className="text-xl">Minhas Tarefas</CardTitle>
                                            <CardDescription className="text-sm text-muted-foreground">
                                                Gerencie suas tarefas diárias e acompanhe seu progresso.
                                            </CardDescription>
                                        </div>
                                        <CircularProgress  value={completedTasks} total={totalTasks} size={60} />
                                    </CardHeader>

                                    {tasks.length === 0 ? (
                                        <CardContent className="flex flex-col items-center justify-center flex-1 overflow-auto pb-4">
                                            <div className="space-y-4">
                                                <div className="flex flex-col items-center justify-center py-8 text-center">
                                                    <CheckCircle2 className="h-12 w-12 text-muted-foreground/50" />
                                                    <h3 className="mt-2 text-lg font-medium">Nenhuma tarefa</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        Adicione sua primeira tarefa usando o campo abaixo.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    ) : (
                                    <CardContent className="flex-1 overflow-auto pb-4">
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                {tasks.map((task) => (
                                                    <motion.div
                                                        key={task.id}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className={`flex items-center justify-between rounded-lg border border-border p-3 ${task.completed ? "bg-muted/50" : ""}`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <Checkbox
                                                                checked={task.completed}
                                                                onCheckedChange={() => toggleTaskCompletion(task.id)}
                                                                id={`task-${task.id}`}
                                                            />
                                                            <div className="flex flex-col">
                                                                <label
                                                                    htmlFor={`task-${task.id}`}
                                                                    className={`text-sm font-medium ${task.completed ? "line-through text-muted-foreground" : ""
                                                                        }`}
                                                                >
                                                                    {task.title}
                                                                </label>
                                                                {task.category && (
                                                                    <Badge
                                                                        variant="outline"
                                                                        className={`mt-1 w-fit text-xs}`}
                                                                        style={{ backgroundColor: getHexColorByCategoryName(task.category) }}
                                                                    >
                                                                        {task.category}
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => deleteTask(task.id)}
                                                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                            <span className="sr-only">Excluir tarefa</span>
                                                        </Button>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent> )}
                                    <CardFooter className="sticky bottom-0 bg-background border-t border-border pt-4">
                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault()
                                                addTask()
                                            }}
                                            className="flex w-full items-center gap-2"
                                        >
                                            <Input
                                                placeholder="Adicionar nova tarefa..."
                                                value={newTask}
                                                onChange={(e) => setNewTask(e.target.value)}
                                                className="flex-1 text-sm"
                                            />
                                            <Select value={newTaskCategory} onValueChange={setNewTaskCategory}>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Categoria" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="none">Sem categoria</SelectItem>
                                                    {categories.map((category) => (
                                                        <SelectItem key={category.id} value={category.name} className="capitalize">
                                                            {category.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button type="submit" size="default">
                                                    Adicionar
                                                </Button>
                                            </motion.div>
                                        </form>
                                    </CardFooter>
                                </Card>
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="categories">
                                <motion.div
                                    key="categories"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                <Card className="border border-border h-[calc(100vh-157px)] flex flex-col">
                                    <CardHeader className="sticky top-0 bg-background z-10">
                                        <CardTitle className="text-xl">Categorias</CardTitle>
                                        <CardDescription className="text-sm text-muted-foreground">
                                            Crie e gerencie categorias para organizar suas tarefas.
                                        </CardDescription>
                                    </CardHeader>
                                        <CardContent className="flex-1 overflow-auto pb-4">
                                            {isLoadingCategories ? (
                                                <div className="flex justify-center items-center h-full">
                                                    <span className="text-muted-foreground text-sm">Carregando categorias...</span>
                                                </div>
                                            ) : categories.length === 0 ? (
                                                <div className="flex flex-col items-center justify-center py-8 text-center">
                                                    <Circle className="h-12 w-12 text-muted-foreground/50" />
                                                    <h3 className="mt-2 text-lg font-medium">Nenhuma categoria</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        Adicione sua primeira categoria usando o formulário abaixo.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                                                    {categories.map((category) => (
                                                        <div
                                                            key={category.id}
                                                            className="flex items-center justify-between rounded-lg border border-border p-3"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div className="h-4 w-4 rounded-full" style={{ backgroundColor: category.color }} />
                                                                <span className="text-sm font-medium capitalize">{category.name}</span>
                                                            </div>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={() => deleteCategory(category.id)}
                                                                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                                <span className="sr-only">Excluir categoria</span>
                                                            </Button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </CardContent>
                                    <CardFooter className="sticky bottom-0 bg-background border-t border-border pt-4">
                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault()
                                                addCategory()
                                            }}
                                            className="grid w-full gap-4 sm:grid-cols-[1fr_auto_auto]"
                                        >
                                            <Input
                                                placeholder="Nome da categoria..."
                                                value={newCategory}
                                                onChange={(e) => setNewCategory(e.target.value)}
                                                className="text-sm"
                                            />
                                            <div className="flex items-center gap-2">
                                                <Label htmlFor="color" className="sr-only">
                                                    Cor
                                                </Label>
                                                <Input
                                                    type="color"
                                                    id="color"
                                                    value={newCategoryColor}
                                                    onChange={(e) => setNewCategoryColor(e.target.value)}
                                                    className="h-10 w-10 cursor-pointer p-1"
                                                />
                                            </div>
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button type="submit" size="default" disabled={isCreatingCategory}>
                                                    {isCreatingCategory ? "Adicionando..." : "Adicionar"}
                                                </Button>
                                            </motion.div>
                                        </form>
                                    </CardFooter>
                                </Card>
                                </motion.div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </main>
            </div>
        </div>
    );

}