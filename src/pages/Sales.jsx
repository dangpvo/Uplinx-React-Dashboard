import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";
import { SALES_STAT } from "../assets/mockData";

const Sales = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales Dashboard"></Header>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={SALES_STAT.totalRevenue}
            color="#6366F1"
          />
          <StatCard
            name="Avg. Order Value"
            icon={ShoppingCart}
            value={SALES_STAT.averageOrderValue}
            color="#10B981"
          />
          <StatCard
            name="Conversion Rate"
            icon={TrendingUp}
            value={SALES_STAT.conversionRate}
            color="#F59E0B"
          />
          <StatCard
            name="Sales Growth"
            icon={CreditCard}
            value={SALES_STAT.salesGrowth}
            color="#EF4444"
          />
        </motion.div>

        <SalesOverviewChart></SalesOverviewChart>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesByCategoryChart></SalesByCategoryChart>
          <DailySalesTrend></DailySalesTrend>
        </div>
      </main>
    </div>
  );
};
export default Sales;
