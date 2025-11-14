import { motion } from "framer-motion";
import { Ship, Plane, Truck, Warehouse } from "lucide-react";
import GlowButton from "./components/GlowButton";
import FloatingCard from "./components/FloatingCard";
import Hero3D from "./components/Hero3D";
import TaglineRotator from "./components/TaglineRotator";
import Card3DIcon from "./components/Card3DIcon";

function Section({ children, className = "" }) {
  return <section className={`w-full ${className}`}>{children}</section>;
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A1A2F] text-white overflow-x-hidden">
      {/* Background image with gradient overlay */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(31,58,147,0.6)_0%,rgba(10,26,47,1)_70%)]" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0A1A2F]/40 via-[#0A1A2F]/50 to-[#0A1A2F]" />

      {/* Nav */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#1F3A93] to-[#3CF2F2] shadow-[0_0_20px_rgba(60,242,242,0.45)] grid place-items-center">
            <Truck className="text-white" size={20} />
          </div>
          <span className="font-semibold tracking-wide text-white/90">NeonLogix</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-white/70">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#dashboard" className="hover:text-white">Dashboard</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <GlowButton>Get Started</GlowButton>
        </div>
      </header>

      {/* Hero */}
      <Section className="container mx-auto px-6 pt-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Smart Logistics. Simplified Delivery.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="mt-4 text-white/80 text-lg"
            >
              Your logistics, powered by technology.
            </motion.p>
            <TaglineRotator />
            <div className="mt-8 flex flex-wrap gap-4">
              <GlowButton>Get Started</GlowButton>
              <GlowButton variant="outline">Login to Portal</GlowButton>
            </div>
          </div>
          <div>
            <Hero3D />
          </div>
        </div>
      </Section>

      {/* Interactive 3D Cards */}
      <Section id="features" className="container mx-auto px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FloatingCard
            title="Track Shipment"
            description="Real-time visibility from port to doorstep with predictive ETAs."
            icon={<Card3DIcon type="truck" />}
          />
          <FloatingCard
            title="Warehouse"
            description="Inventory optimization, slotting, and automated alerts."
            icon={<Card3DIcon type="warehouse" />}
          />
          <FloatingCard
            title="Fleet Management"
            description="Optimize routes, fuel, and utilization with live telemetry."
            icon={<Card3DIcon type="fleet" />}
          />
        </div>
      </Section>

      {/* Dashboard Preview */}
      <Section id="dashboard" className="container mx-auto px-6 pb-20">
        <div className="relative rounded-3xl p-1 bg-gradient-to-br from-[#1F3A93]/60 via-[#3CF2F2]/30 to-transparent">
          <div className="rounded-3xl p-6 bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Live Shipment */}
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10 shadow-[0_10px_50px_rgba(31,58,147,0.25)]">
                <div className="flex items-center gap-3">
                  <Truck size={18} className="text-[#3CF2F2]" />
                  <span className="text-sm text-white/70">Live Shipment</span>
                </div>
                <p className="mt-4 text-3xl font-bold">128</p>
                <p className="text-white/60 text-sm">In Transit</p>
                <div className="mt-4 h-2 rounded bg-white/10 overflow-hidden">
                  <div className="h-full w-[68%] bg-gradient-to-r from-[#3CF2F2] to-[#52FF8F]" />
                </div>
              </div>

              {/* Delivery Progress */}
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <Ship size={18} className="text-[#3CF2F2]" />
                  <span className="text-sm text-white/70">Delivery Progress</span>
                </div>
                <div className="mt-4 space-y-3">
                  {["Preparing", "Loading", "At Port", "Sailing", "Delivered"].map((s, i) => (
                    <div key={s} className="flex items-center justify-between text-sm">
                      <span className="text-white/70">{s}</span>
                      <span className="text-white/90">{Math.round((i + 1) * 18 + 8)}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Preview */}
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <Plane size={18} className="text-[#3CF2F2]" />
                  <span className="text-sm text-white/70">Fleet Movement</span>
                </div>
                <div className="mt-4 h-40 rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1974&auto=format&fit=crop"
                    alt="map"
                    className="h-full w-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1A2F]/60" />
                  <div className="absolute inset-0 animate-pulse">
                    <div className="absolute left-1/3 top-1/3 h-2 w-2 rounded-full bg-[#52FF8F] shadow-[0_0_20px_rgba(82,255,143,0.9)]" />
                    <div className="absolute right-1/4 bottom-1/4 h-2 w-2 rounded-full bg-[#3CF2F2] shadow-[0_0_20px_rgba(60,242,242,0.9)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="container mx-auto px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(82,255,143,0.25)_0%,transparent_60%)]" />
          <div className="relative z-10 rounded-3xl p-10 bg-white/5 backdrop-blur-xl border border-white/10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold">Power your logistics with Neon precision</h3>
            <p className="mt-3 text-white/80">Realtime tracking, predictive ETAs, and AI-driven optimization in one portal.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <GlowButton>Get Started</GlowButton>
              <GlowButton variant="outline">Login to Portal</GlowButton>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} NeonLogix. All rights reserved.
      </footer>
    </div>
  );
}
