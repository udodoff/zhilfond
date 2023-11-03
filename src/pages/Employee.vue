<template>
    <div class="employee">
        <img src="../assets/user-big.png" alt="user" width="424" height="286">
        <div class="employee-info">
            <div class="contacts">
                <p class="name">{{ employeeStore.state.selectedEmployee.name }}</p>
                <p class="email">
                    <span class="subheading">email: &nbsp;</span>
                    {{ employeeStore.state.selectedEmployee.email }}
                </p>
                <p class="phone">
                    <span class="subheading">phone: &nbsp;</span>
                    {{ employeeStore.state.selectedEmployee.phone }}
                </p>
            </div>
            <p class="about-heading">О себе</p>
            <p class="about-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
</template>
<script setup>
import employeeStore from '../store'

</script>
<style lang="scss" scoped>
.employee{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 61px;
    padding-left: 21px;
    padding-top: 30px;
    padding-right: 30px;
}
.contacts{
    display: flex;
    flex-direction: column;
    gap: 10px;
    .name{
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
    }
    .email{
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #76787D;
    }
    .phone{
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #76787D;
    }
    .subheading{
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        color: #000000;
    }
}
.about-heading{
    margin-top: 20px;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
}
.about-paragraph{
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #76787D;
}
</style>