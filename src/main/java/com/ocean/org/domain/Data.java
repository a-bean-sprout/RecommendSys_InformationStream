package com.ocean.org.domain;

import java.util.List;

public class Data<T>{
        private int TotalItemCount;
        private int TotalPageCount;
        private int CurrentPageIndex;
        private int PageSize;
        private int StartItemIndex;
        private int EndItemIndex;
        private List<T> Items;


    public Data(int totalItemCount, int totalPageCount, int currentPageIndex, int pageSize, int startItemIndex, int endItemIndex) {
        TotalItemCount = totalItemCount;
        TotalPageCount = totalPageCount;
        CurrentPageIndex = currentPageIndex;
        PageSize = pageSize;
        StartItemIndex = startItemIndex;
        EndItemIndex = endItemIndex;
    }

    public Data(List<T> items) {
        Items = items;
    }

    public Data() {
        }

    public int getTotalItemCount() {
            return TotalItemCount;
        }

        public void setTotalItemCount(int TotalItemCount) {
            this.TotalItemCount = TotalItemCount;
        }

        public int getTotalPageCount() {
            return TotalPageCount;
        }

        public void setTotalPageCount(int TotalPageCount) {
            this.TotalPageCount = TotalPageCount;
        }

        public int getCurrentPageIndex() {
            return CurrentPageIndex;
        }

        public void setCurrentPageIndex(int CurrentPageIndex) {
            this.CurrentPageIndex = CurrentPageIndex;
        }

        public int getPageSize() {
            return PageSize;
        }

        public void setPageSize(int PageSize) {
            this.PageSize = PageSize;
        }

        public int getStartItemIndex() {
            return StartItemIndex;
        }

        public void setStartItemIndex(int StartItemIndex) {
            this.StartItemIndex = StartItemIndex;
        }

        public int getEndItemIndex() {
            return EndItemIndex;
        }

        public void setEndItemIndex(int EndItemIndex) {
            this.EndItemIndex = EndItemIndex;
        }

        public List<T> getItems() {
            return Items;
        }

        public void setItems(List<T> Items) {
            this.Items = Items;
        }


}
