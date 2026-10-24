import React from "react";
import { motion } from "framer-motion";
import { HomeIcon, CompassIcon } from "lucide-react";

// Optional: standard shadcn/ui Button import or fallback
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "default",
  asChild,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-5";
  const variants = {
    default:
      "bg-[#4d6a10] text-[#f3f8e4] hover:bg-[#5b7d14] hover:-translate-y-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_14px_rgba(77,106,16,0.25)]",
    outline:
      "border border-[#c8d4b0] bg-white/80 text-[#4d6a10] hover:bg-[#e7efcf] hover:border-[#6f9a0c] hover:-translate-y-0.5 backdrop-blur-md shadow-sm",
  };

  const combinedClass = `${baseClasses} ${variants[variant]} ${className}`;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: `${combinedClass} ${(children.props as { className?: string }).className || ""}`,
    });
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}

// Subcomponents for Empty layout
export function Empty({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-col items-center text-center max-w-md ${className}`}>{children}</div>;
}

export function EmptyHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-col items-center w-full ${className}`}>{children}</div>;
}

export function EmptyTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h1 className={className}>{children}</h1>;
}

export function EmptyDescription({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={className}>{children}</p>;
}

export function EmptyContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mt-8 flex items-center justify-center ${className}`}>{children}</div>;
}

/**
 * Animated 404 Not Found Page Component
 * Styled with Amyreil Cherry-Blossom & Olive Color Theme
 */
export function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#f7f9f2] to-[#eaf0dd]">
      {/* Ambient Watercolor Background Glow */}
      <div 
        className="pointer-events-none absolute -inset-10 opacity-30 blur-2xl filter"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(180, 205, 82, 0.35), rgba(77, 106, 16, 0.15) 60%, transparent 80%)"
        }}
      />

      {/* Floating Animated Ambient Tiles */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[15%] top-[20%] h-12 w-12 rounded-xl border border-white/70 bg-white/40 shadow-sm backdrop-blur-md"
      />
      <motion.div
        animate={{ y: [8, -8, 8], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute right-[18%] bottom-[25%] h-14 w-14 rounded-xl border border-white/70 bg-white/40 shadow-sm backdrop-blur-md"
      />

      <Empty>
        <EmptyHeader>
          {/* Animated Masked 404 Title */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <EmptyTitle 
                className="font-extrabold text-[clamp(120px,18vw,210px)] leading-[0.88] tracking-tighter select-none bg-gradient-to-b from-[#4d6a10] via-[#6f9a0c] to-[#b4cd52] bg-clip-text text-transparent"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0.05) 82%, rgba(0,0,0,0) 100%)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0.05) 82%, rgba(0,0,0,0) 100%)",
                }}
              >
                404
              </EmptyTitle>
            </motion.div>
          </motion.div>

          {/* Description tucked under the mask */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          >
            <EmptyDescription className="-mt-8 whitespace-nowrap text-base sm:text-lg font-medium tracking-tight text-[#121410]/80">
              The page you're looking for might have been <br />
              moved or doesn't exist.
            </EmptyDescription>
          </motion.div>
        </EmptyHeader>

        <EmptyContent>
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-3"
          >
            <Button asChild>
              <a href="/">
                <HomeIcon className="mr-2 size-4 transition-transform duration-300 group-hover:scale-110" data-icon="inline-start" />
                Go Home
              </a>
            </Button>

            <Button asChild variant="outline">
              <a href="/#services" className="group">
                <CompassIcon className="mr-2 size-4 transition-transform duration-500 group-hover:rotate-45" data-icon="inline-start" />
                Explore
              </a>
            </Button>
          </motion.div>
        </EmptyContent>
      </Empty>
    </div>
  );
}

export default function DemoOne() {
  return <NotFound />;
}
