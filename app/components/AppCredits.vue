<template>
	<Label textWrap="true" textAlignment="center">
		<FormattedString>
			<Span text="Sourcecode available on GitHub/@zaarheed" />
		</FormattedString>
	</Label>
</template>

<script>
export default {
	name: "AppCredits",

	props: {
		year: {
			type: Number,
			required: true
		}
	}
};
</script>

<style scoped>
</style>
