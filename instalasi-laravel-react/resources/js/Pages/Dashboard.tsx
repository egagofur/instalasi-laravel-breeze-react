import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

interface Props {
  auth: any;
  errors: any;
}

export default function Dashboard(props: Props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      error={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard DOT
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              Hello {props.auth.user.name} You're logged in!
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
