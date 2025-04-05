import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import React from "react";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import ProductsTable from "../components/products/ProductTable";
import SalesTrendChart from "../components/products/SalesTrendChart";

const Products = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Products"}></Header>

      <main className="max-w-7xl mx-auto py-8 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={Package}
            value={1234}
            color="#6366F1"
          ></StatCard>
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value={89}
            color="#10B981"
          ></StatCard>
          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value={23}
            color="#F59E0B"
          ></StatCard>
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={"$543,210"}
            color="#EF4444"
          ></StatCard>
        </motion.div>

        <ProductsTable></ProductsTable>

        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart></SalesTrendChart>
          <CategoryDistributionChart></CategoryDistributionChart>
        </div>
      </main>
    </div>
  );
};

export default Products;
