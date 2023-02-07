package de.fom.webapp.model.request;

public class SearchSetsRequest {
    /**
     * String
     */
    private String searchParam;

    /**
     * String
     */
    private String page;

    /**
     * String
     */
    private String tags;

    /**
     * String
     */
    private String pageSize;

    /**
     *
     * @return String
     */
    public String getSearchParam() {
        return searchParam;
    }

    /**
     *
     * @return String
     */
    public String getPage() {
        return page;
    }

    /**
     *
     * @return String
     */
    public String getTags() {
        return tags;
    }

    /**
     *
     * @return String
     */
    public String getPageSize() {
        return pageSize;
    }
}
