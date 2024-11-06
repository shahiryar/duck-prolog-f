import Navbar from "@/components/Navbar"

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="w-full h-screen overflow-hidden flex flex-col">
            {/* <Navbar /> */}
            <div className="w-full h-full flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    );
  }