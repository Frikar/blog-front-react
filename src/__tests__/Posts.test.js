import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Posts from "../pages/posts";
import userEvent from "@testing-library/user-event";
import { ContextProvider } from "../context/ContexProvider";
import App from "../App";

const wrapper = ({ children }) => <ContextProvider>{children}</ContextProvider>;

const renderWithRouter = (ui, { route = "/1" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    ...render(ui, { wrapper: ContextProvider }),
  };
};

test("renders list of post", async () => {
  renderWithRouter(<App />, { route: "/1" });

  expect(screen.getByText(/Posts de/i)).toBeInTheDocument();
  const postElement = await screen.findAllByTestId("postListItem");
  await waitFor(() => {
    expect(postElement[0]).toBeInTheDocument();
  });
});

test("title input should change", () => {
  renderWithRouter(<App />, { route: "/1" });
  const createButton = screen.getByTestId("create-button");
  fireEvent.click(createButton);

  const testValue = "test title";
  const titleInputElement = screen.getByPlaceholderText("Titulo");
  fireEvent.change(titleInputElement, { target: { value: testValue } });

  expect(titleInputElement.value).toBe(testValue);
});

test("body input should change", () => {
  renderWithRouter(<App />, { route: "/1" });
  const createButton = screen.getByTestId("create-button");
  fireEvent.click(createButton);

  const testValue = "test body";
  const bodyInputElement = screen.getByPlaceholderText("Body");
  fireEvent.change(bodyInputElement, { target: { value: testValue } });

  expect(bodyInputElement.value).toBe(testValue);
});

test("form should create item in list", async () => {
  renderWithRouter(<App />, { route: "/1" });
  const createButton = screen.getByTestId("create-button");

  fireEvent.click(createButton);
  const testBody = "test body";
  const testTitle = "test title";

  const titleInputElement = screen.getByPlaceholderText("Titulo");
  fireEvent.change(titleInputElement, { target: { value: testTitle } });

  const bodyInputElement = screen.getByPlaceholderText("Body");
  fireEvent.change(bodyInputElement, { target: { value: testBody } });

  await waitFor(() => {
    expect(
      screen.getByRole("option", { name: "Diego Vasquez" })
    ).toBeInTheDocument();
  });

  const buttonEl = screen.getByTestId("submit-button");
  fireEvent.click(buttonEl);

  await waitFor(() => {
    expect(screen.getByText("test title")).toBeInTheDocument();
  });
});

test("form should edit item in list", async () => {
  renderWithRouter(<App />, { route: "/1" });
  const editEl = await screen.findAllByTestId("postEdit");

  const index = editEl.length - 1;

  const testTitle = "test title edit";

  fireEvent.click(editEl[index]);
  const titleInputElement = screen.getByPlaceholderText("Titulo");
  fireEvent.change(titleInputElement, { target: { value: testTitle } });
  const buttonEl = screen.getByTestId("submit-button");
  fireEvent.click(buttonEl);
  await waitFor(() => {
    expect(screen.getByText(testTitle)).toBeInTheDocument();
  });
});

test("delete item in list of post", async () => {
  renderWithRouter(<App />, { route: "/1" });
  const deleteElement = await screen.findAllByTestId("postDelete");

  const index = deleteElement.length - 1;

  userEvent.click(deleteElement[index]);

  await waitFor(() => {
    expect(deleteElement[index]).not.toBeInTheDocument();
  });
});
