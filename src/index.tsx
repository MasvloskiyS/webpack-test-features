import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router";
import router from '@/routes';


const domNode = document.getElementById('root');
// ✅ Виправлено: Додано перевірку на null, щоб уникнути помилки

if (domNode) {
    const root = createRoot(domNode);
    root.render(
        <RouterProvider router={router} />,
    );
} else {
    console.error('Root element with ID "root" not found in the document.');
}
