import { useState } from "react";

export default function WindowContent() {
    const [activeWindow, setActiveWindow] = useState(1);

    const ventanas = [
        { id: 1, titulo: 'HELLO.C', contenido: '#include<stdio.h>\n#include<conio.h>\nvoid main()\n{\n  printf("Hello World");\n  getch();\n}' },
        { id: 2, titulo: 'RAINBOW.C', contenido: 'Contenido de RAINBOW.C' },
        { id: 3, titulo: 'CLOCK.C', contenido: 'Contenido de CLOCK.C' },
    ];

    const getWindowOrder = () => {
        const order = [];
        for (let i = 1; i <= ventanas.length; i++) {
            if (i === activeWindow) {
                order.push(i);
            }
        }
        for (let i = 1; i <= ventanas.length; i++) {
            if (i !== activeWindow) {
                order.unshift(i);
            }
        }
        return order;
    };

    return (
            <div className="absolute top-10 left-10 w-96">
                {getWindowOrder().map((idVentana) => {
                    const ventana = ventanas.find((v) => v.id === idVentana);
                    return (
                        <div
                            key={ventana.id}
                            className={`w-full border border-indigo-500 mb-1 ${ventana.id === activeWindow ? 'border-blue-500' : ''
                                }`}
                        >
                            <div
                                className="bg-indigo-700 p-2 cursor-pointer"
                                onClick={() => setActiveWindow(ventana.id)}
                            >
                                {ventana.titulo}
                            </div>
                            {ventana.id === activeWindow && (
                                <div className="bg-301934 p-2">
                                    <pre className="text-xs">{ventana.contenido}</pre>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

    );
}