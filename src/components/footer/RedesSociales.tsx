import React from 'react';

const SocialLinks: React.FC = () => {
    return (
        <ul className="mb-4 mt-4 list-none space-x-1">
            
            <li className="inline-block text-left">
                <a
                    className="relative mb-1 inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap rounded p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-accent transition duration-300 ease-linear hover:text-blue-600 hover:shadow-2xl hover:shadow-blue-500/50"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="sr-only hidden">Facebook</span>
                    <svg
                        className="h-8 w-8 fill-current"
                        aria-label="Facebook"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        />
                    </svg>
                </a>
            </li>

            <li className="inline-block text-left">
                <a
                    className="relative mb-1 inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap rounded p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-accent transition duration-300 ease-linear hover:text-pink-500 hover:shadow-2xl hover:shadow-pink-400/50"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="sr-only hidden">Instagram</span>
                    <svg
                        className="h-8 w-8 fill-current"
                        aria-label="Instagram"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        />
                    </svg>
                </a>
            </li>

            <li className="inline-block text-left">
                <a
                    className="relative mb-1 inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap rounded p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-accent transition duration-300 ease-linear hover:text-text hover:shadow-2xl hover:shadow-gray-300"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="sr-only hidden">Twitter</span>
                    <svg
                        className="h-8 w-8 fill-current"
                        aria-label="Twitter"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        />
                    </svg>
                </a>
            </li>

            <li className="inline-block text-left">
                <a
                    className="relative mb-1 inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap rounded p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-accent transition duration-300 ease-linear hover:text-purple-500 hover:shadow-2xl hover:shadow-purple-500/50"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="sr-only hidden">GitHub</span>
                    <svg
                        className="h-8 w-8 fill-current"
                        aria-label="GitHub"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.21.66-.47v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.6.07-.6 1.01.07 1.55 1.04 1.55 1.04.9 1.55 2.35 1.1 2.92.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.64 0 0 .84-.27 2.75 1.02a9.4 9.4 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.56 1.38.21 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.16.56.67.46A10.013 10.013 0 0022 12c0-5.52-4.48-10-10-10z"
                        />
                    </svg>
                </a>
            </li>
        </ul>
    );
};

export default SocialLinks;
