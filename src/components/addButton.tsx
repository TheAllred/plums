import { PlusIcon } from "@heroicons/react/20/solid";
export default function AddButton() {
  return (
    <a
      className="bg-green hover:bg-darkGreen rounded-full p-4 fixed bottom-0 right-0 mr-8 mb-8 text-white"
      href="/new"
    >
      <PlusIcon className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
