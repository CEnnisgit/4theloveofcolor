"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData, type ProjectItem } from "@/lib/data/projects";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  MapPin,
  Paintbrush,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sun,
  Droplets,
  ArrowRight,
  Maximize2,
  Sparkles,
} from "lucide-react";

export function ProjectsClient() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "all") return true;
    return project.category === activeTab;
  });

  return (
    <div className="w-full space-y-16 lg:space-y-24">
      {/* Category Filter Tabs */}
      <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-ink/10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Selected Suncoast Transformations
              </h2>
              <p className="text-sm text-ink-muted mt-1 font-medium">
                Filter by project type to view paint specs, surface prep, and timelines.
              </p>
            </div>
            <TabsList className="bg-warm-card border border-ink/10 p-1.5 rounded-[var(--radius)]">
              <TabsTrigger value="all" className="data-[state=active]:bg-terracotta data-[state=active]:text-white">
                All Projects ({projectsData.length})
              </TabsTrigger>
              <TabsTrigger value="exterior" className="data-[state=active]:bg-terracotta data-[state=active]:text-white">
                Exterior ({projectsData.filter((p) => p.category === "exterior").length})
              </TabsTrigger>
              <TabsTrigger value="interior" className="data-[state=active]:bg-terracotta data-[state=active]:text-white">
                Interior ({projectsData.filter((p) => p.category === "interior").length})
              </TabsTrigger>
              <TabsTrigger value="cabinetry" className="data-[state=active]:bg-terracotta data-[state=active]:text-white">
                Cabinet Refinishing ({projectsData.filter((p) => p.category === "cabinetry").length})
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group flex flex-col justify-between overflow-hidden bg-white border border-ink/10 rounded-[var(--radius)] shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* Aspect Ratio Image Container */}
                    <div
                      className="relative overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <AspectRatio ratio={16 / 9} className="bg-warm-bg">
                        <Image
                          src={project.image}
                          alt={project.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </AspectRatio>
                      
                      {/* Image Overlay Hover Cue */}
                      <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white/95 text-ink font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-[var(--radius)] shadow-md flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-terracotta" /> Inspect Case Study
                        </span>
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <Badge variant="default" className="bg-ink text-white font-semibold text-[10px] tracking-wider uppercase border-none shadow">
                          {project.categoryLabel}
                        </Badge>
                        <Badge variant="outline" className="bg-white/95 text-ink font-semibold text-[10px] tracking-wider uppercase backdrop-blur-xs border-ink/20 shadow-xs">
                          <MapPin className="w-3 h-3 text-terracotta mr-1 inline" />
                          {project.neighborhood}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="p-6 pb-3 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-terracotta uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <CardTitle
                        className="font-serif text-xl font-bold text-ink hover:text-terracotta transition-colors cursor-pointer leading-tight"
                        onClick={() => setSelectedProject(project)}
                      >
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-6 pt-0 space-y-4">
                      <p className="text-sm text-ink-muted leading-relaxed font-medium line-clamp-3">
                        {project.summary}
                      </p>

                      {/* Specs Chips */}
                      <div className="space-y-2 pt-2 border-t border-ink/10 text-xs">
                        <div className="flex items-center text-ink/80 font-medium">
                          <Paintbrush className="w-3.5 h-3.5 text-terracotta mr-2 shrink-0" />
                          <span className="truncate">{project.paintSpec}</span>
                        </div>
                        <div className="flex items-center text-ink/80 font-medium">
                          <Clock className="w-3.5 h-3.5 text-gold mr-2 shrink-0" />
                          <span>{project.timeline}</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  <CardFooter className="p-6 pt-0">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-warm-bg text-ink border border-ink/20 hover:bg-terracotta hover:text-white hover:border-terracotta font-bold text-xs uppercase tracking-widest h-10 transition-all rounded-[var(--radius)] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>View Full Project Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Interactive Project Detail Modal / Lightbox */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl bg-warm-bg border-ink/20 p-6 sm:p-8">
            <DialogHeader className="space-y-3 pr-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-terracotta text-white font-bold text-[10px] uppercase tracking-wider rounded-[var(--radius)]">
                  {selectedProject.categoryLabel}
                </Badge>
                <Badge variant="outline" className="bg-white text-ink border-ink/20 font-bold text-[10px] uppercase tracking-wider rounded-[var(--radius)]">
                  <MapPin className="w-3 h-3 text-terracotta mr-1" />
                  {selectedProject.location} ({selectedProject.neighborhood})
                </Badge>
              </div>
              <DialogTitle className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-ink-muted font-medium">
                Detailed surface preparation, material specification, and execution summary.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 my-2">
              {/* Full Image Preview */}
              <div className="relative overflow-hidden border border-ink/10 rounded-[var(--radius)] bg-white shadow-sm">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </AspectRatio>
              </div>

              {/* Summary Callout */}
              <div className="p-4 bg-white border border-ink/10 rounded-[var(--radius)] space-y-1">
                <h4 className="text-xs uppercase font-bold text-terracotta tracking-wider">Project Overview</h4>
                <p className="text-sm text-ink font-medium leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-ink/10 rounded-[var(--radius)] space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
                    <Paintbrush className="w-3.5 h-3.5 text-terracotta" /> Coating Specification
                  </span>
                  <p className="text-sm font-bold text-ink">{selectedProject.paintSpec}</p>
                </div>
                <div className="p-4 bg-white border border-ink/10 rounded-[var(--radius)] space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold" /> Turnaround Time
                  </span>
                  <p className="text-sm font-bold text-ink">{selectedProject.timeline}</p>
                </div>
              </div>

              {/* Deep-Dive Execution Breakdown */}
              <div className="border border-ink/10 bg-white rounded-[var(--radius)] p-5 space-y-4">
                <h4 className="font-serif text-lg font-bold text-ink flex items-center gap-2 border-b border-ink/10 pb-2">
                  <ShieldCheck className="w-5 h-5 text-terracotta" /> Execution &amp; Craftsmanship Standards
                </h4>

                <div className="grid grid-cols-1 gap-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-ink">Surface Prep: </span>
                      <span className="text-ink-muted">{selectedProject.details.prep}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-ink">Primer &amp; Sealant: </span>
                      <span className="text-ink-muted">{selectedProject.details.primer}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-ink">Topcoat System: </span>
                      <span className="text-ink-muted">{selectedProject.details.topcoat}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-ink">Final Outcome: </span>
                      <span className="text-ink-muted">{selectedProject.details.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter className="flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="outline"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto border-ink/20 text-ink font-bold text-xs uppercase tracking-wider h-11 rounded-[var(--radius)]"
              >
                Close Case Study
              </Button>
              <Link
                href={`/contact?project=${encodeURIComponent(selectedProject.title)}`}
                className="w-full sm:w-auto bg-terracotta text-white font-bold text-xs uppercase tracking-wider h-11 hover:bg-ink transition-colors rounded-[var(--radius)] inline-flex items-center justify-center px-5 text-center"
              >
                Request Similar Project Estimate
              </Link>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* Craftsmanship Proof Banner */}
      <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="border border-ink/10 bg-white p-8 lg:p-12 rounded-[var(--radius)] shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta flex items-center gap-1.5">
              <Sun className="w-4 h-4" /> Florida Sun &amp; Salt Air Resistance
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-ink leading-tight">
              Engineered for the Suncoast Climate
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-medium">
              Florida sun, sea salt humidity, and sudden summer downpours break down cheap paint in under two years. Every home shown above was prepped, sealed, and painted by our family team using proven, climate-rated systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-ink/10">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-[var(--radius)] bg-warm-bg border border-ink/10 flex items-center justify-center text-terracotta">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-ink">2,500 PSI Prep Wash</h3>
              <p className="text-xs text-ink-muted leading-relaxed font-medium">
                We remove salt deposits, chalking, mold spores, and loose coatings before applying a single drop of primer.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-[var(--radius)] bg-warm-bg border border-ink/10 flex items-center justify-center text-terracotta">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-ink">Elastomeric Caulking</h3>
              <p className="text-xs text-ink-muted leading-relaxed font-medium">
                High-flex polyurethane caulking seals window casings and stucco hairline cracks against wind-driven rain.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-[var(--radius)] bg-warm-bg border border-ink/10 flex items-center justify-center text-terracotta">
                <Paintbrush className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-ink">100% Acrylic Coatings</h3>
              <p className="text-xs text-ink-muted leading-relaxed font-medium">
                Sherwin-Williams Emerald® &amp; Duration® formulas offer maximum UV reflection and mildew resistance.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-[var(--radius)] bg-warm-bg border border-ink/10 flex items-center justify-center text-terracotta">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-ink">Family-Owned Crew</h3>
              <p className="text-xs text-ink-muted leading-relaxed font-medium">
                Edwin and family manage the jobsite daily. No subcontractors rushing through prep to get to the next job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full pb-8">
        <div className="bg-ink text-white p-8 sm:p-12 lg:p-16 rounded-[var(--radius)] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
              Ready To Transform Your Home?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Have a project like these in mind?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
              Contact our family team for a free on-site consultation and clear, written estimate. No pressure and no hidden fees.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-12 px-8 hover:bg-white hover:text-ink transition-colors rounded-[var(--radius)] shadow-md inline-flex items-center justify-center text-center"
            >
              Request Estimate
            </Link>
            <a
              href="tel:+19175840069"
              className="border border-white/30 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-widest h-12 px-6 rounded-[var(--radius)] inline-flex items-center justify-center text-center"
            >
              Call (917) 584-0069
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
