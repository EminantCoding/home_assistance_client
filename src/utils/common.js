import { pageRoutes } from "@/routes/routes";

export const adminVerticalMenues = [
  {
    id: 0,
    label: "Dashboard",
    path: pageRoutes.dashboard,
  },
  {
    id: 1,
    label: "Users",
    path: pageRoutes.users,
  },
  {
    id: 2,
    label: "Assets",
    path: pageRoutes.assets,
  },
  {
    id: 3,
    label: "Property Taxes",
    path: pageRoutes.propertytaxes,
  },
  {
    id: 4,
    label: "Transactions",
    path: pageRoutes.transactions,
  },
  {
    id: 5,
    label: "Tenant Agreement",
    path: pageRoutes.tenantagreements,
  },
  {
    id: 6,
    label: "Proximities",
    path: pageRoutes.proximities,
  },
  {
    id: 8,
    label: "Documents",
    path: pageRoutes.documents,
  },
];
