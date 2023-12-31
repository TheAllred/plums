import { createNote } from "@/app/actions";
import NoteSelect from "./parentSelect";
import { NewItem } from "@/types/types";

export default function ModalForm() {
  async function handleSubmit(formData: FormData) {
    "use server";
    // @ts-ignore
    const newNewItem: NewItem = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      attachment: formData.get("attachment") as string,
      attachmentalt: null,
      parentNote: Number(formData.get("parent")) || null,
      authorid: 1,
    };
    console.log(newNewItem);
    await createNote(newNewItem);
  }

  return (
    <>
      <div className="inset-0 flex justify-center items-start">
        <div className="w-[600px] flex flex-col">
          <h1 className="font-head bg-violet text-white text-center text-3xl p-5 rounded">
            Create New Note
          </h1>
          <form className="bg-background p-5 rounded" action={handleSubmit}>
            <label htmlFor="title" className="font-head font-bold">
              TITLE:
            </label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              className="border mb-5 font-body"
            />
            <br />

            <label htmlFor="description" className="font-head font-bold">
              DESCRIPTION OF TOPIC:
            </label>
            <br />
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={10}
              className="border mb-5 font-body"
            ></textarea>
            <br />

            <label htmlFor="attachment" className="font-head font-bold">
              COVER IMAGE URL:
            </label>
            <br />
            <input
              type="url"
              name="attachment"
              id="attachment"
              className="border mb-5 font-body"
            />
            <br />

            <label htmlFor="reference" className="font-head font-bold">
              REFERENCE LINK:
            </label>
            <br />
            <p className="font-body italic text-xs">
              (Website, Image, Video, etc.)
            </p>
            <input
              type="url"
              name="reference"
              id="reference"
              className="border mb-5 font-body"
            />
            <br />

            <label htmlFor="notes" className="font-head font-bold">
              NOTES FOR REFERENCE:
            </label>
            <br />
            <textarea
              name="notes"
              id="notes"
              cols={30}
              rows={10}
              className="border mb-5"
            ></textarea>
            <br />
            <label htmlFor="parent" className="font-head font-bold">
              Parent Note
            </label>
            <br />
            <NoteSelect></NoteSelect>
            <br />

            <button
              type="submit"
              className="font-head bg-green hover:bg-darkGreen text-white p-4 rounded-3xl font-bold"
            >
              Create Note
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
