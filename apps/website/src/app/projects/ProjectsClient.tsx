"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData, type ProjectItem } from "@/lib/data/projects";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapPin, Maximize2, ArrowRight, Phone } from "lucide-react";
import { contact } from "@/lib/data/content";

export function ProjectsClient() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "all") return true;
    return project.category === activeTab;
  });

  return (
    <div className="w-full space-y-12 lg:space-y-16">
      {/* Category Filter Bar */}
      <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-ink/10">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta block mb-1">
                Portfolio Showcase
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Selected Work Across the Suncoast
              </h2>
            </div>
            <TabsList className="bg-warm-card border border-ink/15 p-1 rounded-[var(--radius)] shadow-xs">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-terracotta data-[state=active]:text-white text-xs font-bold rounded-[var(--radius)] px-3.5 py-1.5 transition-colors cursor-pointer"
              >
                All Work ({projectsData.length})
              </TabsTrigger>
              <TabsTrigger
                value="exterior"
                className="data-[state=active]:bg-terracotta data-[state=active]:text-white text-xs font-bold rounded-[var(--radius)] px-3.5 py-1.5 transition-colors cursor-pointer"
              >
                Exterior ({projectsData.filter((p) => p.category === "exterior").length})
              </TabsTrigger>
              <TabsTrigger
                value="interior"
                className="data-[state=active]:bg-terracotta data-[state=active]:text-white text-xs font-bold rounded-[var(--radius)] px-3.5 py-1.5 transition-colors cursor-pointer"
              >
                Interior ({projectsData.filter((p) => p.category === "interior").length})
              </TabsTrigger>
              <TabsTrigger
                value="cabinetry"
                className="data-[state=active]:bg-terracotta data-[state=active]:text-white text-xs font-bold rounded-[var(--radius)] px-3.5 py-1.5 transition-colors cursor-pointer"
              >
                Cabinetry ({projectsData.filter((p) => p.category === "cabinetry").length})
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-warm-card border border-ink/15 rounded-[var(--radius)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* High-Res Photo Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover opacity-95 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-ink text-white font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-[var(--radius)] shadow-md border border-white/10 flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-gold" /> View High-Res
                        </span>
                      </div>
                    </div>

                    <CardHeader className="p-6 pb-2 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-terracotta uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{project.location} • {project.neighborhood}</span>
                      </div>
                      <CardTitle className="font-serif text-xl font-bold text-ink group-hover:text-terracotta transition-colors leading-snug">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-6 pt-0 space-y-3">
                      <p className="text-sm text-ink-muted font-medium leading-relaxed">
                        {project.summary}
                      </p>
                      <div className="pt-3 border-t border-ink/10 flex items-center justify-between text-xs text-ink/80 font-semibold">
                        <span>{project.paintSpec}</span>
                        <span className="text-ink-muted font-normal">{project.timeline}</span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Clean Full-Res Photo Lightbox Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-4xl bg-warm-card border-ink/20 p-6 sm:p-8 rounded-[var(--radius)] shadow-2xl">
            <DialogHeader className="space-y-2 pr-6">
              <div className="flex items-center gap-2 text-xs font-bold text-terracotta uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedProject.location} • {selectedProject.neighborhood}</span>
              </div>
              <DialogTitle className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4 my-2">
              {/* Full Image Display */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius)] border border-ink/10 bg-ink shadow-md">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Concise Summary & Specs */}
              <div className="p-5 bg-white border border-ink/15 rounded-[var(--radius)] space-y-3 text-sm shadow-xs">
                <p className="text-ink font-medium leading-relaxed">
                  {selectedProject.summary}
                </p>
                <div className="pt-3 border-t border-ink/10 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-ink/80">
                  <span>Specification: {selectedProject.paintSpec}</span>
                  <span>Timeline: {selectedProject.timeline}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-ink-muted font-medium">
                Interested in a similar finish for your home?
              </span>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-11 px-6 hover:bg-[var(--color-terracotta-dark)] active:scale-[0.99] transition-all rounded-[var(--radius)] inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Rich Dark Espresso CTA Section */}
      <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full pt-4 pb-8">
        <div className="bg-ink text-white p-8 sm:p-12 lg:p-16 rounded-[var(--radius)] shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
              Direct Family Service
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
              Have a project like these in mind?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
              Talk directly with Edwin and our family crew for a clear, written estimate with zero pressure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-12 px-7 hover:bg-[var(--color-terracotta-dark)] active:scale-[0.99] transition-all rounded-[var(--radius)] shadow-md inline-flex items-center justify-center text-center"
            >
              Request Free Estimate
            </Link>
            <a
              href={contact.phoneHref}
              className="border-2 border-white/40 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-widest h-12 px-6 rounded-[var(--radius)] inline-flex items-center justify-center text-center flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {contact.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
