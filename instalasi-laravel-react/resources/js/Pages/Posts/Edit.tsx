import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage, Link } from "@inertiajs/inertia-react";

interface Props {
  errors?: boolean;
  auth: boolean;
  label: string;
  name: string;
  onSubmit: () => void;
}

export default function Dashboard(props: Props) {
  const { post } = usePage().props;
  const Post: any = post;
  const { data, setData, put, errors } = useForm({
    name: Post.name || "",
    alamat: Post.alamat || "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    put(route("posts.update", Post.id));
  }

  return (
    <AuthenticatedLayout
      auth={props.auth}
      error={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Edit Post
        </h2>
      }
    >
      <Head title="Posts" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <Link
                  className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                  href={route("posts.index")}
                >
                  Back
                </Link>
              </div>

              <form name="createForm" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <div className="mb-4">
                    <label className="">Nama</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2"
                      name="hari"
                      value={data.name}
                      onChange={(e) => setData("name", e.target.value)}
                    />
                    <span className="text-red-600">{errors.name}</span>
                  </div>
                  <div className="mb-0">
                    <label className="">Alamat</label>
                    <textarea
                      className="w-full rounded"
                      name="kegiatan"
                      value={data.alamat}
                      onChange={(e) => setData("alamat", e.target.value)}
                    />
                    <span className="text-red-600">{errors.alamat}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
