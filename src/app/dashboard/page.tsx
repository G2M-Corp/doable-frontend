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

    const addTask = () => {
        if (newTask.trim() !== "") {
            const task: Task = {
                id: Date.now().toString(),
                title: newTask,
                completed: false,
                category: newTaskCategory || undefined,
            }
            setTasks([...tasks, task])
            setNewTask("")
            setNewTaskCategory("")
        }
    }

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
            setCategories([...categories, category])
            setNewCategory("")
            setNewCategoryColor("#4f46e5")
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
        <h1>Hello World!</h1>
    );

}