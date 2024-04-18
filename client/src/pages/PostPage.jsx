import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {Button, Spinner} from 'flowbite-react';
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        } else {
          setPost(data.posts[0]);
          setError(false);
          setLoading(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPosts();
  }, [postSlug]);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
        <Spinner size='xl' />
    </div>
  )

  return <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
    <h1 className="text-3xl mt-10 p-3 text-center font-serif mx-w-2xl mx-auto lg:text-4xl dark:text-white">{post && post.title}</h1>
    <Link to={`/search?category=${post.category}`} className="self-center mt-5">
        <Button color='gray' pill size='xs'>{post && post.category}</Button>
    </Link>
    <img src={post && post.image} alt={post.title} className="mt-10 p-3 max-h-[600px] w-full object-cover" />
    <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs dark:text-white">
        <span>{post&& new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">{post && (post.content.length /1000).toFixed(0)} mins read</span>
    </div>
    <div className="p-3 max-w-2xl w-full mx-auto post-content dark:text-white" dangerouslySetInnerHTML={{__html: post && post.content}}></div>
    <div className="max-w-4xl w-full mx-auto ">
        <CallToAction />
    </div>
    <CommentSection postId={post._id}/>
  </main>;
}