import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import React from "react";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const Overview = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Overview"}></Header>

      <main className="max-w-7xl mx-auto py-8 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$12.34"
            color="#6366f1"
          ></StatCard>
          <StatCard
            name="New Users"
            icon={Users}
            value="1234"
            color="#8b5cf6"
          ></StatCard>
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="245"
            color="#ec4899"
          ></StatCard>
          <StatCard
            name="Conversion Rate"
            icon={BarChart2}
            value="12.34%"
            color="#10b981"
          ></StatCard>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart></SalesOverviewChart>
          <CategoryDistributionChart></CategoryDistributionChart>
          <SalesChannelChart></SalesChannelChart>
        </div>
      </main>
    </div>
  );
};

export default Overview;
