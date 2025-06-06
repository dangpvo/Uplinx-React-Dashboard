import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { color, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { span } from "framer-motion/client";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    path: "/",
  },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "#8b5cf6",
    path: "/products",
  },
  {
    name: "Users",
    icon: Users,
    color: "#ec4899",
    path: "/users",
  },
  {
    name: "Sales",
    icon: DollarSign,
    color: "#10b981",
    path: "/sales",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    color: "#f59e08",
    path: "/orders",
  },
  {
    name: "Analytics",
    icon: TrendingUp,
    color: "#3b82f6",
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#6ee7b7",
    path: "/settings",
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800/50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <div className="flex justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
          >
            <Menu size={24}></Menu>
          </motion.button>

          <div
            className={`${
              isSidebarOpen ? "w-[140px]" : "w-0"
            } transition-all duration-300`}
          >
            <img className="object-cover" src="/uplink_logo.png" alt="" />
          </div>
        </div>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item, index) => (
            <Link key={item.path} to={item.path}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                ></item.icon>
                {isSidebarOpen && (
                  <motion.span
                    className="ml-4 whitespace-nowrap"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
