<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8">
                <form action="">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                            placeholder="Enter your email">
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Add text</label>
                        <textarea type="text" class="form-control" id="description" row="20"
                            placeholder="Enter your request"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>