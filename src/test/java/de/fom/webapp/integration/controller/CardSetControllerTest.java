package de.fom.webapp.integration.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.context.jdbc.Sql.ExecutionPhase.BEFORE_TEST_METHOD;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlGroup;
import org.springframework.test.web.servlet.MockMvc;

/**
 * Unit Tests for CardSetController
 */
@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
@SqlGroup({
    @Sql(value = "classpath:empty/reset.sql", executionPhase = BEFORE_TEST_METHOD),
    @Sql(value = "classpath:init/memory-data.sql", executionPhase = BEFORE_TEST_METHOD)
})
public class CardSetControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    void testLoadAllCardSets() throws Exception {
        this.mockMvc.perform(
                get("/api/cardSets")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content("{}")
                )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.content.[0].name").value("Harry Potter"))
                .andExpect(jsonPath("$.pageable.pageSize").value(10))
                .andExpect(jsonPath("$.pageable.pageNumber").value(0))
                .andExpect(jsonPath("$.last").value(true));
    }

    @Test
    void testLoadAllCardSetsWithPageParameter() throws Exception {
        this.mockMvc.perform(
                get("/api/cardSets")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"page\": \"6\"}")
                )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.pageable.pageNumber").value(6));
    }

    @Test
    void testLoadAllCardSetsWithPageSizeParameter() throws Exception {
        this.mockMvc.perform(
                        get("/api/cardSets")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("{\"pageSize\": \"6\"}")
                )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.pageable.pageSize").value(6));
    }

    @Test
    void testLoadAllCardSetsWithPageParameterBogus() throws Exception {
        this.mockMvc.perform(
                        get("/api/cardSets")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("{\"page\": \"Dobby\"}")
                )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.pageable.pageNumber").value(0));
    }
    @Test
    void testLoadAllCardSetsWithPageSizeParameterBogus() throws Exception {
        this.mockMvc.perform(
                        get("/api/cardSets")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("{\"pageSize\": \"Freedom\"}")
                )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.pageable.pageSize").value(10));
    }

    @Test
    void testSearchCardSetsWithParam() throws Exception {
        this.mockMvc.perform(
                get("/api/searchCardSets")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"searchParam\": \"Harry Potter\"}")
                )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.content.[0].name").value("Harry Potter"));

    }
    @Test
    void testSearchCardSetsWithTags() throws Exception {
        this.mockMvc.perform(
                        get("/api/searchCardSets")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("{\"tags\": \"Zauberei\"}")
                )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.content.[0].tags").value("Film;Zauberei;Magie;Fantasy"));
    }

    @Test
    void testSearchCardSetsWithParamBogus() throws Exception {
        this.mockMvc.perform(
                        get("/api/searchCardSets")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("{\"searchParam\": \"Aragorn\"}")
                )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.content.[0].name").doesNotExist());

    }
    @Test
    void testSearchCardSetsWithTagsBogus() throws Exception {
        this.mockMvc.perform(
                        get("/api/searchCardSets")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("{\"tags\": \"Mein Schat\"}")
                )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.content.[0].tags").doesNotExist());
    }
    @Test
    void testSelectCardSetById() throws Exception {
        this.mockMvc.perform(
                get("/api/selectCardSet")
                        .contentType(APPLICATION_JSON)
                        .content("{\"cardSetId\" : \"1\"}")
        )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.id").value(1));
    }

    @Test
    void testSelectCardSetByIdBogus() throws Exception {
        this.mockMvc.perform(
                get("/api/selectCardSet")
                        .contentType(APPLICATION_JSON)
                        .content("{\"cardSetId\" : \"Herr der Ringe\"}")
        )
                .andDo(print())
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$").doesNotExist());
    }
}
