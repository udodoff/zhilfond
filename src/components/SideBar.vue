<template>
    <div class="sidebar" :class="employeeList.length > 4 ? 'employee-cards-scroll' : ''">
        <div class="search-form">
            <p class="subheading">Поиск сотрудников</p>
            <form @submit.prevent="handleSearch">
                <input v-model="search" type="text" class="search-input" placeholder="Введите Id или имя">
            </form>
        </div>
        <p class="subheading results-p">Результаты</p>
        <p class="start-search" v-if="!employeeList.length">{{ searchTemplateStr }}</p>
        <div class="employee-cards" v-else>
            <UserCard
                v-for="employee in employeeList" 
                :username="employee.username"
                :email="employee.email"
                :userId="employee.id"
                @click="selectEmployee(employee)"
            />
        </div>
    </div>
</template>
<script setup>
    import { ref, computed } from 'vue';
    import employeeStore from '../store'
    import UserCard from './UserCard.vue';
    import router from '@/router';

    const search = ref('');
    const searchTemplateStr = ref('Начните поиск ')
    const employeeList = computed(() => employeeStore.state.employee)

    const handleSearch = async () => {
        if(!search.value.length){
            return
        }
        await employeeStore.dispatch('getEmployee', search.value)
        if(!employeeList.value.length){
            searchTemplateStr.value = 'Ничего не найдено'
        }
        search.value = '';
    }
    const selectEmployee = (employee) => {
        employeeStore.commit('setSelectedEmployee', employee)
        router.push(`/employee/${employee.id}`)
    }
</script>
<style lang="scss" scoped>
.sidebar{
    padding-top: 27px;
    padding-left: 20px;
    padding-right: 31px;
    padding-bottom: 27px;
    background-color: #FDFDFD;
    border-right: 1px solid #DEDEDD;
    display: flex;
    flex-direction: column;
}
.search-form{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
}
.subheading{
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
}
.search-input{
    width: 240px;
    border-radius: 10px;
    outline: none;
    padding-left: 16px;
    padding-top: 14px;
    padding-bottom: 14px;
    line-height: 17px;
    border: 1px solid #E9ECEF;
}
.results-p{
    margin-top: 22px;
}
.start-search{
    color: #76787D;
    margin-top: 10px;
    font-size: 14px;
}
.employee-cards{
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 5px;
}
.employee-cards-scroll{
    padding-right: 16px;
}
</style>