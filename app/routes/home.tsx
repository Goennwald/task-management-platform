import { Welcome } from "../welcome/welcome";

export function meta() {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Task management platform" },
    ];
}

export default function Home() {
    return <Welcome />;
}
