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
import { Rocket, Trash2, CheckCircle2, Circle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "sonner";
import { CircularProgress } from "@/components/ui/circular-progress"
import { motion } from "framer-motion"
import { API_BASE_URL } from "../../lib/baseUrls";

type Task = {
    id: string
    titulo: string
    descricao: string
    status: "pendente" | "concluida"
    data_limite?: string
    categoria?: {
        id: string
        nome: string
        cor: string
    }[]
}

type Category = {
    id: string
    name: string
    color: string
}

export default function DashboardPage() {
    const [isLoadingCategories, setIsLoadingCategories] = useState(true)
    const [isLoadingTasks, setIsLoadingTasks] = useState(true)
    const [isCreatingCategory, setIsCreatingCategory] = useState(false)
    const [isCreatingTask, setIsCreatingTask] = useState(false)
    const [userData] = useState<{ name: string } | null>(null)
    const [tasks, setTasks] = useState<Task[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [newTask, setNewTask] = useState("")
    const [newTaskCategory, setNewTaskCategory] = useState("")
    const [newCategory, setNewCategory] = useState("")
    const [newCategoryColor, setNewCategoryColor] = useState("#4f46e5")

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) return

        refetchTasks()
        fetchCategories(token)
        // eslint-disable-next-line
    }, [])

    const fetchCategories = async (token: string) => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/categorias/`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            if (!res.ok) throw new Error("Erro ao buscar categorias")
            const data = await res.json()
            // eslint-disable-next-line
            const formatted = (Array.isArray(data.results) ? data.results : data).map((cat: any) => ({
                id: cat.id.toString(),
                name: cat.nome,
                color: cat.cor,
            }))
            setCategories(formatted)
        } catch (err) {
            console.error(err)
            showToast("Erro ao carregar categorias.", "error")
        } finally {
            setIsLoadingCategories(false)
        }
    }

    const refetchTasks = async () => {
        const token = localStorage.getItem("token")
        if (!token) return

        setIsLoadingTasks(true)
        try {
            const res = await fetch(`${API_BASE_URL}/api/tarefas/`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            const data = await res.json()
            if (Array.isArray(data.results)) setTasks(data.results)
        } catch (err) {
            console.error(err)
            showToast("Erro ao carregar tarefas.", "error")
        } finally {
            setIsLoadingTasks(false)
        }
    }

    const showToast = (message: string, type: "success" | "error") => {
        toast(message, {
            duration: 2000,
            style: {
                backgroundColor: type === "success" ? "#4ade80" : "#f87171",
                color: type === "success" ? "#000" : "#fff",
            },
        })
    }

    const handleTaskAction = async (action: "add" | "delete" | "toggle", task?: Task, newStatus?: "pendente" | "concluida") => {
        const token = localStorage.getItem("token")
        if (!token) return

        try {
            if (action === "add" && newTask.trim()) {
                const categoryObj = categories.find((cat) => cat.name === newTaskCategory)
                setIsCreatingTask(true)
                await fetch(`${API_BASE_URL}/api/tarefas/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        titulo: newTask,
                        descricao: newTask,
                        status: "pendente",
                        data_limite: new Date().toISOString(),
                        categoria: categoryObj ? [parseInt(categoryObj.id)] : [],
                    }),
                })
                showToast("Tarefa criada com sucesso!", "success")
                setNewTask("")
                setNewTaskCategory("")
                await refetchTasks()
            } else if (action === "delete" && task) {
                await fetch(`${API_BASE_URL}/api/tarefas/${task.id}/`, {
                    method: "DELETE",
                    headers: { Authorization: `Bearer ${token}` },
                })
                showToast("Tarefa deletada com sucesso!", "success")
                await refetchTasks()
            } else if (action === "toggle" && task && newStatus) {
                await fetch(`${API_BASE_URL}/api/tarefas/${task.id}/`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ status: newStatus }),
                })
                setTasks((prev) =>
                    prev.map((t) => (t.id === task.id ? { ...t, status: newStatus as "pendente" | "concluida" } : t)),
                )
            }
        } catch (err) {
            console.error(err)
            showToast("Erro ao realizar ação na tarefa.", "error")
        } finally {
            if (action === "add") setIsCreatingTask(false)
        }
    }

    const handleCategoryAction = async (action: "add" | "delete", category?: Category) => {
        const token = localStorage.getItem("token")
        if (!token) return

        try {
            if (action === "add" && newCategory.trim()) {
                if (categories.some((cat) => cat.name.toLowerCase() === newCategory.toLowerCase())) {
                    showToast("Essa categoria já existe!", "error")
                    return
                }
                setIsCreatingCategory(true)
                const res = await fetch(`${API_BASE_URL}/api/categorias/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        nome: newCategory,
                        descricao: Math.random().toString(36).substring(2, 14),
                        cor: newCategoryColor,
                    }),
                })
                const created = await res.json()
                setCategories([{ id: created.id.toString(), name: created.nome.toLowerCase(), color: created.cor }, ...categories])
                setNewCategory("")
                setNewCategoryColor("#4f46e5")
                showToast("Categoria criada com sucesso!", "success")
            } else if (action === "delete" && category) {
                await fetch(`${API_BASE_URL}/api/categorias/${category.id}/`, {
                    method: "DELETE",
                    headers: { Authorization: `Bearer ${token}` },
                })
                setCategories(categories.filter((cat) => cat.id !== category.id))
                setTasks((prev) =>
                    prev.map((task) => ({
                        ...task,
                        categoria: task.categoria?.filter((cat) => cat.id !== category.id),
                    })),
                )
                showToast("Categoria deletada com sucesso!", "success")
            }
        } catch (err) {
            console.error(err)
            showToast("Erro ao realizar ação na categoria.", "error")
        } finally {
            if (action === "add") setIsCreatingCategory(false)
        }
    }

    const getBadgeByTaskCategory = (categoria?: Task["categoria"]) => {
        if (!categoria || categoria.length === 0) return null
        return (
            <Badge
                variant="outline"
                className="mt-1 w-fit text-xs"
                style={{ backgroundColor: categoria[0].cor }}
            >
                {categoria[0].nome}
            </Badge>
        )
    }

    const totalTasks = tasks.length
    const completedTasks = tasks.filter((t) => t.status === "concluida").length

    const getAvatarUsername = (name: string): string => {
        const parts = name.trim().split(" ")
        return parts.length === 1 ? parts[0][0] : `${parts[0][0]}${parts[1][0]}`
    }


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
                        {isLoadingCategories ? (
                            <p className="text-sm text-muted-foreground">Carregando categorias...</p>
                        ) : categories.length > 0 ? (
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

                                        {isLoadingTasks ? (
                                            <CardContent className="flex flex-col items-center justify-center flex-1 overflow-auto pb-4">
                                                <div className="space-y-4">
                                                    <div className="flex flex-col items-center justify-center py-8 text-center">
                                                        <span className="animate-spin rounded-full h-8 w-8 border-2 border-muted-foreground border-t-transparent" />
                                                        <p className="mt-4 text-sm text-muted-foreground">Carregando tarefas...</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        ) : tasks.length === 0 ? (
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
                                                        className={`flex items-center justify-between rounded-lg border border-border p-3 ${task.status === "concluida" ? "bg-muted/50" : ""}`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <Checkbox
                                                                checked={task.status === "concluida"}
                                                                onCheckedChange={() =>
                                                                    handleTaskAction(
                                                                        "toggle",
                                                                        task,
                                                                        task.status === "concluida" ? "pendente" : "concluida"
                                                                    )
                                                                }
                                                                id={`task-${task.id}`}
                                                            />
                                                            <div className="flex flex-col">
                                                                <label
                                                                    htmlFor={`task-${task.id}`}
                                                                    className={`text-sm font-medium ${task.status === "concluida" ? "line-through text-muted-foreground" : ""
                                                                        }`}
                                                                >
                                                                    {task.titulo}
                                                                </label>
                                                                {task.categoria && task.categoria.length > 0 && (
                                                                    getBadgeByTaskCategory(task.categoria)
                                                                )}
                                                            </div>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => handleTaskAction("delete", task)}
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
                                                handleTaskAction("add")
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
                                                <Button type="submit" size="default" disabled={isCreatingTask}>
                                                    {isCreatingTask ? "Adicionando..." : "Adicionar"}
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
                                                                onClick={() => handleCategoryAction("delete", category)}
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
                                                handleCategoryAction("add")
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