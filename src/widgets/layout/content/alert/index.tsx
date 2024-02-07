const Alert = ({ month, date, details }: any) => {
	return (
		<>
			<div class="flex w-full overflow-hidden bg-white rounded-lg shadow-md">
				<div class="flex flex-col items-center justify-center w-42 p-4 bg-blue-950">
					<p>{ month }</p>
					<span class="font-mono text-4xl text-white">
						<span>{ date }</span>
					</span>
				</div>

				<div class="px-4 py-2 -mx-3 flex items-center">
					<div class="mx-3">
						<span class="font-semibold text-blue-950 fontText">{ details }</span>
					</div>
				</div>
			</div>

		</>
	);
};
export default Alert;
