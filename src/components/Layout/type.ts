export interface ILayout {
  // Sidebar for Mobile UI
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export interface IItem {
  key: string;
  name: string;
  path: string;
  children?: Array<IItem>;
}
