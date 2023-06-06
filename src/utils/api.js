import { axiosInstance } from "../http";

const config = { withCredentials: true };

export const postRegisterUser = (data) => axiosInstance.post('/auth/register', data, config);

export const postLoginUser = (data) => axiosInstance.post('/auth/login', data, config);

export const getAuthUser = () => axiosInstance.get('authentication', config);

export const getConversations = () => axiosInstance.get('/conversations', config);

export const getConversationsById = (id) => axiosInstance.get(`/conversations/${id}`, config);

export const getConversationMessages = (conversationId) => axiosInstance.get(`/message/${conversationId}`, config);

export const uploadPhotos = (data) => axiosInstance.post('/photos/upload', data, {
    headers: {'Content-Type': 'multipart/form-data' },
    ...config,
});

export const getPhotos = () => axiosInstance.get('/photos', config);

export const deletPhoto = () => axiosInstance.delete('/photos/delete', config);

export const createMessage = (id, data) => axiosInstance.post(`/message/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
    ...config,
});

export const postNewConversation = (data) => axiosInstance.post('/conversatiions', data, config);

export const deleteMessage = ({ id, messageId }) => axiosInstance.delete(`/conversations/${id}/messages/${messageId}`, config);

export const editMessage = ({ content, id, messageId }) => axiosInstance.patch(`/conversations/${id}/messages/${messageId}`, { content }, config);

export const searchUsers = (query) => axiosInstance.get(`/users/search?query=${query}`, config);

export const fetchConnections = () => axiosInstance.get('/connection', config);

export const fetchConnectionRequest = () => axiosInstance.get('/connection-requests', config);

export const createConnectionRequest = (id) => axiosInstance.post('/connection-requests', { userId: id }, config);

export const cancelConnectionRequest = (id) => axiosInstance.delete(`/connection-requests/${id}/cancel`, config);

export const acceptConnectionRequest = (id) => axiosInstance.patch(`/connection-requests/${id}/accept`, {}, config);

export const rejectConnectionRequest = (id) => axiosInstance.patch(`/connection-requests/${id}/reject`, {}, config);

export const removeConnection = (id) => axiosInstance.delete(`connection/${id}/delete`, config);

export const checkConversationOrCreate = (recipientId) => axiosInstance.get(`/exists/conversations/${recipientId}`, config);

export const updateStatusMessage = (data) => axiosInstance.patch('/users/presence/status', data, config);

export const getSearchUser = (name) => axiosInstance.get(`/users/search?username=${name}`);

export const filterSearchUser = (minAge, maxAge, minHeight, maxHeight, religion, caste, annualIncome) => axiosInstance.get(`/users/filter?minAge=${minAge}&&maxAge=${maxAge}&&minHeight=${minHeight}&&maxHeight=${maxHeight}&&maritalStatus=${maritalStatus}&&religion=${religion}&&caste=${caste}&&annualIncome=${annualIncome}`)