"use client";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
