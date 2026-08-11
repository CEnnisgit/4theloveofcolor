"use client";

import { contact } from "@/lib/data/content";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function CallToActionSection() {
  return (
    <div className="flex flex-col py-24">
      <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 shadow-2xl border border-ink/10 bg-warm-card">
          
          <div className="bg-ink text-white p-12 lg:p-20 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Ready to Start</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-[1.1]">
                Let&apos;s talk about your space.
              </h2>
              <p className="text-lg text-gray-400 font-medium leading-relaxed max-w-sm">
                Get a clear, no-pressure written quote for your next painting project.
              </p>
            </div>
            
            <div className="mt-16 space-y-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-gold mb-2">Direct Line</p>
                <p className="text-xl font-medium">{contact.phone}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-gold mb-2">Email</p>
                <p className="text-xl font-medium">{contact.email}</p>
              </div>
            </div>
          </div>
          
          <Card className="rounded-none border-0 shadow-none bg-transparent h-full flex flex-col justify-center">
            <CardHeader className="p-12 lg:p-20 pb-0 lg:pb-8">
              <CardTitle className="font-serif text-3xl font-bold text-ink">Request a Quote</CardTitle>
              <CardDescription className="text-ink/70">Fill out the form below and we&apos;ll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent className="p-12 lg:p-20 pt-0 lg:pt-0">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-widest text-ink">First Name</Label>
                    <Input type="text" className="w-full bg-transparent border-ink/20 focus-visible:ring-terracotta rounded-none h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-widest text-ink">Last Name</Label>
                    <Input type="text" className="w-full bg-transparent border-ink/20 focus-visible:ring-terracotta rounded-none h-12" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-widest text-ink">Email Address</Label>
                  <Input type="email" className="w-full bg-transparent border-ink/20 focus-visible:ring-terracotta rounded-none h-12" />
                </div>

                <div className="space-y-2 flex flex-col">
                  <Label className="text-xs font-bold uppercase tracking-widest text-ink mb-1">Project Type</Label>
                  <Select>
                    <SelectTrigger className="w-full bg-transparent border-ink/20 focus:ring-terracotta rounded-none text-ink h-12">
                      <SelectValue placeholder="Select a project type" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-ink/20 bg-warm-bg text-ink shadow-xl ring-0">
                      <SelectItem value="interior" className="focus:bg-ink focus:text-white cursor-pointer rounded-none py-3">Interior Painting</SelectItem>
                      <SelectItem value="exterior" className="focus:bg-ink focus:text-white cursor-pointer rounded-none py-3">Exterior Painting</SelectItem>
                      <SelectItem value="cabinets" className="focus:bg-ink focus:text-white cursor-pointer rounded-none py-3">Cabinet Refinishing</SelectItem>
                      <SelectItem value="commercial" className="focus:bg-ink focus:text-white cursor-pointer rounded-none py-3">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-widest text-ink">Details</Label>
                  <Textarea rows={4} className="w-full bg-transparent border-ink/20 focus-visible:ring-terracotta resize-none rounded-none" />
                </div>
                
                <Button className="w-full bg-terracotta text-white font-bold tracking-widest uppercase text-sm h-14 mt-2 rounded-none hover:bg-ink transition-colors">
                  Request Estimate
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
}
