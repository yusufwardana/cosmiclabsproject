import React, { useState } from "react";
import { BLOG_POSTS } from "../data";
import { BlogPost } from "../types";
import { 
  X, Clock, Calendar, Search, 
  Sparkles, BookOpen, Heart, Share2, ChevronRight 
} from "lucide-react";

interface BlogProps {
  darkMode: boolean;
}

export default function Blog({ darkMode }: BlogProps) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [shared, setShared] = useState<Record<string, boolean>>({});

  const categories = ["Semua", "Digital Solutions", "Connectivity", "IT Infrastructure", "Creative Studio"];

  const handleLike = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1
    }));
  };

  const handleShare = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setShared(prev => ({
      ...prev,
      [postId]: true
    }));
    setTimeout(() => {
      setShared(prev => ({
        ...prev,
        [postId]: false
      }));
    }, 2000);
  };

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const categoryMatch = activeCategory === "Semua" || post.category === activeCategory;
    const searchMatch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  return (
    <section
      id="blog"
      className={`py-20 sm:py-28 transition-colors duration-300 border-t ${
        darkMode ? "bg-slate-900/50 border-white/5" : "bg-white border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-500 bg-blue-500/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WAWASAN & ARTIKEL COSMIC</span>
            </div>
            <h2 className={`font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight ${
              darkMode ? "text-white" : "text-slate-950"
            }`}>
              Wawasan & Tren Teknologi Terkini
            </h2>
            <p className={`text-sm sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Pelajari panduan mendalam seputar arsitektur web, optimalisasi fiber optik, hingga tren desain identitas visual langsung dari tim ahli kami.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              id="blog-search-input"
              type="text"
              placeholder="Cari panduan atau kata kunci..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 text-xs rounded-xl border outline-none transition-all ${
                darkMode 
                  ? "bg-slate-950 border-white/5 focus:border-blue-500 text-white" 
                  : "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-800"
              }`}
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Category filters row */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-thin">
          {categories.map((cat) => {
            const isSelect = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`blog-category-btn-${cat.replace(/\s+/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  isSelect
                    ? "bg-blue-600 border-blue-500 text-white shadow-md"
                    : darkMode
                      ? "bg-slate-950 border-white/5 text-slate-400 hover:text-white hover:bg-slate-900"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Blog Post List */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-400 font-mono text-sm">Tidak ada artikel yang cocok dengan pencarian Anda.</p>
            <button
              id="blog-clear-filters"
              onClick={() => { setActiveCategory("Semua"); setSearchQuery(""); }}
              className="mt-2 text-xs text-blue-500 underline font-semibold cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                id={`blog-card-${post.id}`}
                onClick={() => setSelectedPost(post)}
                className={`group rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between ${
                  darkMode
                    ? "bg-slate-950/75 border-white/5 hover:border-white/10 hover:bg-slate-950"
                    : "bg-slate-50 border-slate-200/80 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5"
                }`}
              >
                <div className="flex flex-col sm:flex-row h-full">
                  
                  {/* Blog Image block */}
                  <div className="relative w-full sm:w-2/5 aspect-video sm:aspect-auto sm:min-h-full overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-slate-950/20" />
                  </div>

                  {/* Blog Body details */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      
                      {/* Meta information row */}
                      <div className="flex items-center space-x-3 text-[10px] font-mono text-slate-400">
                        <span className="text-blue-500 font-bold uppercase">{post.category}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className={`font-display font-black text-lg sm:text-xl line-clamp-2 leading-tight group-hover:text-blue-500 transition-colors ${
                        darkMode ? "text-white" : "text-slate-950"
                      }`}>
                        {post.title}
                      </h3>

                      <p className={`text-xs sm:text-sm leading-relaxed line-clamp-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author stack and Interactions */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-500/10">
                      <div className="flex items-center space-x-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          referrerPolicy="no-referrer"
                          className="w-8 h-8 rounded-full border border-blue-500 bg-slate-900"
                        />
                        <div className="text-[10px]">
                          <span className={`font-bold block ${darkMode ? "text-white" : "text-slate-900"}`}>{post.author.name}</span>
                          <span className="text-slate-400 block font-mono">{post.author.role}</span>
                        </div>
                      </div>

                      {/* Micro actions */}
                      <div className="flex items-center space-x-2.5">
                        <button
                          id={`blog-like-btn-${post.id}`}
                          onClick={(e) => handleLike(post.id, e)}
                          className="p-1.5 rounded-lg hover:bg-slate-500/10 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                        >
                          <Heart className={`w-4 h-4 ${likes[post.id] ? "fill-rose-500 text-rose-500" : ""}`} />
                        </button>
                        <button
                          id={`blog-share-btn-${post.id}`}
                          onClick={(e) => handleShare(post.id, e)}
                          className="p-1.5 rounded-lg hover:bg-slate-500/10 text-slate-400 hover:text-blue-500 transition-colors cursor-pointer"
                        >
                          <Share2 className={`w-4 h-4 ${shared[post.id] ? "text-blue-500" : ""}`} />
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog Article Reader Modal Lightbox */}
        {selectedPost && (
          <div
            id="blog-reader-backdrop"
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedPost(null)}
          >
            <div
              id="blog-reader-body"
              className={`w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl relative animate-zoomIn ${
                darkMode ? "bg-slate-950 border-white/5 text-white" : "bg-white border-slate-200 text-slate-800"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="close-reader-button"
                onClick={() => setSelectedPost(null)}
                className={`absolute top-5 right-5 p-2 rounded-xl transition-all border z-20 cursor-pointer ${
                  darkMode ? "bg-slate-900 border-white/5 hover:bg-slate-800" : "bg-slate-100 border-slate-200 hover:bg-slate-200"
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Header */}
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={selectedPost.imageUrl}
                  alt={selectedPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Meta details */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="text-[10px] font-mono uppercase bg-blue-600 text-white px-2.5 py-1 rounded-full border border-blue-400/20">
                    {selectedPost.category}
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl tracking-tight mt-2.5 leading-tight">
                    {selectedPost.title}
                  </h3>
                </div>
              </div>

              {/* Main article Content and metadata */}
              <div className="p-6 sm:p-10 space-y-6">
                
                {/* Author bios and stats */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-500/10 text-xs text-slate-400 font-mono">
                  <div className="flex items-center space-x-2">
                    <img
                      src={selectedPost.author.avatar}
                      alt={selectedPost.author.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full border border-blue-500 bg-slate-900"
                    />
                    <div>
                      <span className={`font-bold block text-sm ${darkMode ? "text-white" : "text-slate-950"}`}>{selectedPost.author.name}</span>
                      <span className="text-slate-400 text-[10px]">{selectedPost.author.role}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span>Diterbitkan: {selectedPost.date}</span>
                    <span className="block mt-0.5">{selectedPost.readTime}</span>
                  </div>
                </div>

                {/* Body copy */}
                <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                  <p className="font-semibold text-lg">{selectedPost.excerpt}</p>
                  <p>{selectedPost.content}</p>
                  <p>Selain itu, Cosmic Labs terus mengembangkan solusi terpadu, infrastruktur cloud lokal yang aman, dan arsitektur fiber optik. Memahami teknologi serta optimalisasi desain memastikan institusi Anda mencapai performa maksimal secara berkelanjutan.</p>
                </div>

                {/* Tags lists */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-500/10">
                  {selectedPost.tags.map((tg) => (
                    <span
                      key={tg}
                      className={`text-[10px] font-mono px-3 py-1 rounded-full border ${
                        darkMode ? "bg-slate-900 border-white/5 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"
                      }`}
                    >
                      #{tg}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom footer bar */}
              <div className="p-6 border-t border-slate-500/10 bg-slate-500/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2.5">
                  <button
                    id={`blog-modal-like-${selectedPost.id}`}
                    onClick={(e) => handleLike(selectedPost.id, e)}
                    className="p-2 border border-slate-500/10 rounded-xl hover:bg-slate-500/10 text-slate-400 hover:text-rose-500 transition-all flex items-center space-x-1.5 text-xs font-semibold cursor-pointer"
                  >
                    <Heart className={`w-4 h-4 ${likes[selectedPost.id] ? "fill-rose-500 text-rose-500" : ""}`} />
                    <span>{likes[selectedPost.id] || 0} Suka</span>
                  </button>

                  <button
                    id={`blog-modal-share-${selectedPost.id}`}
                    onClick={(e) => handleShare(selectedPost.id, e)}
                    className="p-2 border border-slate-500/10 rounded-xl hover:bg-slate-500/10 text-slate-400 hover:text-blue-500 transition-all flex items-center space-x-1.5 text-xs font-semibold cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{shared[selectedPost.id] ? "Tautan Tersalin!" : "Bagikan Artikel"}</span>
                  </button>
                </div>

                <button
                  id="reader-close-cta"
                  onClick={() => setSelectedPost(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer"
                >
                  Tutup Artikel
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
