import Editor from "@monaco-editor/react";

import { useStore } from "../store/useStore";

export default function MonacoEditor() {

    const {
        sql,
        setSQL
    } = useStore();

    return (

        <div
            className="
                mt-6
                cyber-panel
                rounded-xl
                overflow-hidden
            "
        >

            <div
                className="
                    px-4
                    py-3
                    border-b
                    border-red-950
                    text-red-400
                    tracking-widest
                    text-sm
                "
            >
                SQL EDITOR
            </div>

            <Editor
                height="300px"

                defaultLanguage="sql"

                theme="vs-dark"

                value={sql}

                onChange={(value) => {

                    setSQL(
                        value || ""
                    );
                }}

                options={{

                    minimap: {
                        enabled: false
                    },

                    fontSize: 15,

                    fontFamily:
                        "monospace",

                    smoothScrolling: true,

                    scrollBeyondLastLine: false,

                    automaticLayout: true
                }}
            />

        </div>
    );
}
