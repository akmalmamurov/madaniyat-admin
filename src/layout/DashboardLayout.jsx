import useAuthStore from "@/context/auth";

export const DashboardLayout = () => {
  const auth = useAuthStore((s) => s.auth);
  
  return (
    <div>DashboardLayout</div>
  )
}

export default DashboardLayout