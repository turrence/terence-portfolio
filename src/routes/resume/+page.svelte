<script>
    import resume from '$lib/TerenceTong_Resume.pdf';
</script>
<svelte:head>
	<title>Terence Tong | Resume</title>
	<meta name="description" content="resume" />
</svelte:head>

<div>
    <object title="resume" data={resume} type="application/pdf" width="100%" height="1000px">
        <p>Unable to display PDF file. <a href={resume}>Download</a> instead.</p>
      </object>
</div>