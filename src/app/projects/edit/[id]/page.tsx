"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProjectForm from "@/components/ProjectForm";
import api from "@/utils/api";

export default function EditProjectPage() {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);

useEffect(() => {
  const token = localStorage.getItem("token"); // get token from localStorage

  const fetchProject = async () => {
    try {
      const res = await api.get(`/projects/${id}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (id) fetchProject();
}, [id]);


  if (!data) return <p className="text-center mt-12 sm:mt-20">Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ProjectForm initialData={data} id={Number(id)} isEdit />
    </div>
  );
}
