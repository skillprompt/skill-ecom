import { create } from "zustand";

type TCategoryState = {
  categoryToBeEdited: {
    name: string;
    id: string;
  };
  categoryToBeDeleted: {
    name: string;
    id: string;
  };
  isCreateCategoryModalOpen: boolean;
  isEditCategoryModalOpen: boolean;
  isDeleteCategoryModalOpen: boolean;
};

type TCategoryAction = {
  setCategoryToBeEdited: (categoryToBeEdited: {
    name: string;
    id: string;
  }) => void;
  setCategoryToBeDeleted: (categoryToBeDeleted: {
    name: string;
    id: string;
  }) => void;
  toggleCreateCategoryModal: () => void;
  toggleEditCategoryModal: () => void;
  toggleDeleteCategoryModal: () => void;
};

const useCategoryStore = create<TCategoryState & TCategoryAction>((set) => ({
  categoryToBeEdited: {
    name: "",
    id: "",
  },
  categoryToBeDeleted: {
    name: "",
    id: "",
  },
  isCreateCategoryModalOpen: false,
  isEditCategoryModalOpen: false,
  isDeleteCategoryModalOpen: false,
  setCategoryToBeEdited: (updatedCategoryToBeEdited) =>
    set(() => ({ categoryToBeEdited: updatedCategoryToBeEdited })),
  setCategoryToBeDeleted: (updatedCategoryToBeDeleted) =>
    set(() => ({ categoryToBeDeleted: updatedCategoryToBeDeleted })),
  toggleCreateCategoryModal: () =>
    set((state) => ({
      isCreateCategoryModalOpen: !state.isCreateCategoryModalOpen,
    })),
  toggleEditCategoryModal: () =>
    set((state) => ({
      isEditCategoryModalOpen: !state.isEditCategoryModalOpen,
    })),
  toggleDeleteCategoryModal: () =>
    set((state) => ({
      isDeleteCategoryModalOpen: !state.isDeleteCategoryModalOpen,
    })),
}));

export default useCategoryStore;
