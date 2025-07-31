

<?php $__env->startSection('title', 'Clientes'); ?>

<?php $__env->startSection('content'); ?>
    <div id="clients-admin"></div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <?php echo app('Illuminate\Foundation\Vite')('resources/js/Admin/Clients.jsx'); ?>
    <script>
        $(function() {
            ReactAppend('clients-admin', 'Clients');
        });
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\projects\clickdental\resources\views/admin/clients.blade.php ENDPATH**/ ?>