<template>
    <div class="user-card">
        <img src="../assets/user-image.png" alt="user" width="70" height="70">
        <div class="user-info" :class="employeeStore.state.selectedEmployee.id == props.userId ? 'selected' : ''">
            <p class="username">{{props.username}}</p>
            <p class="email">{{props.email}}</p>
        </div>
    </div>
</template>
<script setup>
    import { defineProps } from 'vue'
    import employeeStore from '../store'

    const props = defineProps({
        username: String,
        email: String,
        userId: Number
    })
</script>
<style lang="scss" scoped>
.user-card{
    box-shadow: 0px 0px 10px 0px #0000001A;
    border-radius: 10px;
    display: flex;
    border: 1px solid #E0E0E0;
    width: 241px;
}
.user-card:hover{
    .user-info{
        background-color: #E0E0E0;
    }
    cursor: pointer;
}
.selected{
    background-color: #E0E0E0;
}
.user-info{
    transition: all 0.3s ease;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 15px;
    gap: 5px;
    .username{
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
    }
    .email{
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: #76787D;
        width: 150px;
        word-wrap: break-word;
    }
}
    
</style>