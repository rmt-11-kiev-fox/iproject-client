<template>
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title">{{diagnosis.Issue.Name}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Accuracy: {{diagnosis.Issue.Accuracy}} %</h6>
            <p class="card-text">Description:</p>
            <p class="card-text">{{diagnosis.Issue.IcdName}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DiagnosisCard',
    props: ['diagnosis']
}
</script>

<style>

</style>