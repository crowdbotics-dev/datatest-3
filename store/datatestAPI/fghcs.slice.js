import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_fghc_list = createAsyncThunk(
  "fghcs/api_v1_fghc_list",
  async payload => {
    const response = await apiService.api_v1_fghc_list(payload)
    return response.data
  }
)
export const api_v1_fghc_create = createAsyncThunk(
  "fghcs/api_v1_fghc_create",
  async payload => {
    const response = await apiService.api_v1_fghc_create(payload)
    return response.data
  }
)
export const api_v1_fghc_retrieve = createAsyncThunk(
  "fghcs/api_v1_fghc_retrieve",
  async payload => {
    const response = await apiService.api_v1_fghc_retrieve(payload)
    return response.data
  }
)
export const api_v1_fghc_update = createAsyncThunk(
  "fghcs/api_v1_fghc_update",
  async payload => {
    const response = await apiService.api_v1_fghc_update(payload)
    return response.data
  }
)
export const api_v1_fghc_partial_update = createAsyncThunk(
  "fghcs/api_v1_fghc_partial_update",
  async payload => {
    const response = await apiService.api_v1_fghc_partial_update(payload)
    return response.data
  }
)
export const api_v1_fghc_destroy = createAsyncThunk(
  "fghcs/api_v1_fghc_destroy",
  async payload => {
    const response = await apiService.api_v1_fghc_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const fghcsSlice = createSlice({
  name: "fghcs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_fghc_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fghc_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghc_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghc_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fghc_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghc_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghc_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fghc_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghc_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghc_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fghc_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghc_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghc_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fghc_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghc_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghc_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fghc_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghc_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_fghc_list,
  api_v1_fghc_create,
  api_v1_fghc_retrieve,
  api_v1_fghc_update,
  api_v1_fghc_partial_update,
  api_v1_fghc_destroy,
  slice: fghcsSlice
}
