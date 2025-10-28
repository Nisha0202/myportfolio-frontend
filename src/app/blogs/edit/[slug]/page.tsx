"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/utils/api";
import BlogForm from "@/components/BlogForm";

export default function EditBlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);

 useEffect(() => {
    const token = localStorage.getItem("token");

    async function fetchBlog() {
      try {
        const res = await api.get(`/blogs/${slug}`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        });
        setBlog(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    if (slug) fetchBlog();
  }, [slug]);

  if (!blog) return <p className="text-center mt-20">Loading...</p>;

  return <BlogForm  initialData={blog} slug={slug as string} isEdit />;
}
