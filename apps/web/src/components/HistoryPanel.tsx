import { Clock3 } from "lucide-react";

import { useStore } from "../store/useStore";

export default function HistoryPanel() {

    const {

        history,

        setUserQuery,

        setSQL

    } = useStore();

    return (

        <div
            className="
                cyber-panel
                rounded-2xl
                p-5
                mt-6
            "
        >

            <div
                className="
                    flex
                    items-center
                    gap-2
                    text-red-400
                    mb-5
                    tracking-widest
                "
            >

                <Clock3 size={18} />

                QUERY HISTORY

            </div>

            <div
                className="
                    space-y-3
                    max-h-[300px]
                    overflow-auto
                "
            >

                {history.map((item) => (

                    <button

                        key={item.id}

                        onClick={() => {

                            setUserQuery(
                                item.prompt
                            );

                            setSQL(
                                item.sql
                            );
                        }}

                        className="
                            w-full
                            text-left
                            border
                            border-red-950
                            hover:border-red-700
                            rounded-xl
                            p-4
                            transition-all
                        "
                    >

                        <div
                            className="
                                text-red-300
                                truncate
                            "
                        >
                            {item.prompt}
                        </div>

                        <div
                            className="
                                text-xs
                                text-gray-500
                                mt-2
                            "
                        >
                            {item.timestamp}
                        </div>

                    </button>

                ))}

            </div>

        </div>
    );
}
