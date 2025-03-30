type CircularProgressProps = {
    value: number
    total: number
    size?: number // valor opcional pra definir tamanho
}

export function CircularProgress({ value, total, size = 72 }: CircularProgressProps) {
    const stroke = 6
    const radius = size / 2 - stroke
    const circumference = 2 * Math.PI * radius
    const percent = total > 0 ? value / total : 0
    const strokeDashoffset = circumference - percent * circumference

    return (
        <div
            className="relative"
            style={{
                width: size,
                height: size,
            }}
        >
            <svg height={size} width={size}>
                <circle
                    stroke="#E5E7EB"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    stroke="#10B981"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset, transition: "stroke-dashoffset 0.5s ease" }}
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                {value}/{total}
            </div>
        </div>
    )
}