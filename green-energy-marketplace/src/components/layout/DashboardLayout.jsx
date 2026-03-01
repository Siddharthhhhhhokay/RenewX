import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children, role }) => {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-200/20 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/20 blur-[120px] rounded-full"></div>
            </div>

            <Navbar />

            <div className="flex-1 flex overflow-hidden">
                <div className="hidden lg:block w-80 p-6 animate-entrance">
                    <Sidebar role={role} />
                </div>

                <main className="flex-1 overflow-y-auto p-12 custom-scrollbar">
                    <div className="max-w-6xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
