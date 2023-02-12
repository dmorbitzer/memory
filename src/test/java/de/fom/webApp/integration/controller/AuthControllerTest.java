package de.fom.webapp.integration.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.http.MediaType.TEXT_PLAIN;
import static org.springframework.test.context.jdbc.Sql.ExecutionPhase.BEFORE_TEST_METHOD;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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
 * Unit Tests for AuthController
 */
@SpringBootTest
@AutoConfigureMockMvc
@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
@SqlGroup({
        @Sql(value = "classpath:empty/reset.sql", executionPhase = BEFORE_TEST_METHOD),
        @Sql(value = "classpath:init/user-data.sql", executionPhase = BEFORE_TEST_METHOD)
})
public class AuthControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testCreateUser() throws Exception
    {
        this.mockMvc.perform(
                        post("/api/auth/register")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("{\"username\": \"test2\", \"email\": \"test2@test.de\", \"password\": \"test\"}")
                )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.username").value("test2"))
                .andExpect(jsonPath("$.email").value("test2@test.de"))
                .andExpect(jsonPath("$.active").value("false"))
                .andExpect(jsonPath("$.password").doesNotExist());
    }

    @Test
    public void testCreateUserWithExistingEmail() throws Exception
    {
        this.mockMvc.perform(
                        post("/api/auth/register")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("{\"username\": \"test2\", \"email\": \"test@test.de\", \"password\": \"test\"}")
                )
                .andDo(print())
                .andExpect(status().is4xxClientError());
    }

    @Test
    public void testCreateUserWithExistingUsername() throws Exception
    {
        this.mockMvc.perform(
                        post("/api/auth/register")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("{\"username\": \"test\", \"email\": \"test2@test.de\", \"password\": \"test\"}")
                )
                .andDo(print())
                .andExpect(status().is4xxClientError());
    }
}
