import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <Head title="Welcome" />
                        <h1 className="text-3xl font-bold">HELLO WORLD</h1>
                        <p className="mt-4 text-gray-600">Welcome to your Laravel + React application!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
