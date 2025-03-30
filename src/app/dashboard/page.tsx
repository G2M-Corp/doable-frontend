"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Rocket, Home, Trash2, CheckCircle2, Circle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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
    const [tasks, setTasks] = useState<Task[]>([
        { id: "1", title: "Finalizar proposta de projeto", completed: false, category: "trabalho" },
        { id: "2", title: "Comprar mantimentos", completed: true, category: "pessoal" },
        { id: "3", title: "Agendar reunião com equipe", completed: false, category: "trabalho" },
        { id: "4", title: "Pagar contas do mês", completed: false, category: "finanças" },
        { id: "5", title: "Preparar apresentação", completed: false, category: "trabalho" },
    ])

    const [newTask, setNewTask] = useState("")
    const [newTaskCategory, setNewTaskCategory] = useState("")

    const [categories, setCategories] = useState<Category[]>([
        { id: "1", name: "trabalho", color: "bg-blue-500" },
        { id: "2", name: "pessoal", color: "bg-green-500" },
        { id: "3", name: "finanças", color: "bg-yellow-500" },
    ])

    const [newCategory, setNewCategory] = useState("")
    const [newCategoryColor, setNewCategoryColor] = useState("#4f46e5")

    const toggleTaskCompletion = (id: string) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
    }

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const addCategory = () => {
        if (newCategory.trim() !== "") {
            const category: Category = {
                id: Date.now().toString(),
                name: newCategory.toLowerCase(),
                color: newCategoryColor,
            }
            setCategories([category, ...categories])
            setNewCategory("")
            setNewCategoryColor("#4f46e5")
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

    const deleteCategory = (id: string) => {
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
    }

    const getCategoryBadgeClass = (categoryName?: string) => {
        if (!categoryName) return ""
        const category = categories.find((c) => c.name === categoryName)

        const colorMap: Record<string, string> = {
            "bg-blue-500": "bg-blue-100 text-blue-800",
            "bg-green-500": "bg-green-100 text-green-800",
            "bg-yellow-500": "bg-yellow-100 text-yellow-800",
            "bg-red-500": "bg-red-100 text-red-800",
            "bg-purple-500": "bg-purple-100 text-purple-800",
            "bg-pink-500": "bg-pink-100 text-pink-800",
            "bg-indigo-500": "bg-indigo-100 text-indigo-800",
        }

        return category ? colorMap[category.color] || "bg-gray-100 text-gray-800" : ""
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
                                    <img
                                        src="https://avatars.githubusercontent.com/u/56761360?v=4"
                                        alt="Avatar do usuário"
                                        className="h-8 w-8 rounded-full object-cover"
                                    />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Perfil</DropdownMenuItem>
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
                                            <div className={`h-3 w-3 rounded-full ${category.color}`} />
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
                                <Card className="border border-border h-[calc(100vh-200px)] flex flex-col">
                                    <CardHeader className="sticky top-0 bg-background z-10">
                                        <CardTitle className="text-xl">Minhas Tarefas</CardTitle>
                                        <CardDescription className="text-sm text-muted-foreground">
                                            Gerencie suas tarefas diárias e acompanhe seu progresso.
                                        </CardDescription>
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
                                    <CardContent className=" flex-1 overflow-auto pb-4">
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                {tasks.map((task) => (
                                                    <div
                                                        key={task.id}
                                                        className={`flex items-center justify-between rounded-lg border border-border p-3 ${task.completed ? "bg-muted/50" : ""}`}>
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
                                                                        className={`mt-1 w-fit text-xs ${getCategoryBadgeClass(task.category)}`}
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
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                                )}
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
                                            <Button type="submit" size="sm">
                                                Adicionar
                                            </Button>
                                        </form>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="categories">
                                <Card className="border border-border h-[calc(100vh-200px)] flex flex-col">
                                    <CardHeader className="sticky top-0 bg-background z-10 pb-3">
                                        <CardTitle className="text-xl">Categorias</CardTitle>
                                        <CardDescription className="text-sm text-muted-foreground">
                                            Crie e gerencie categorias para organizar suas tarefas.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 overflow-auto pb-4">
                                        <div className="space-y-4">
                                            {categories.length === 0 ? (
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
                                                                <div className={`h-4 w-4 rounded-full ${category.color}`} />
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
                                        </div>
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
                                            <Button type="submit" size="default">
                                                Adicionar
                                            </Button>
                                        </form>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </main>
            </div>
        </div>
    );

}