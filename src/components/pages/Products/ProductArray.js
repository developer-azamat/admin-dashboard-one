const columns = [
	{
		field: 'id',
		headerName: 'T/r',
		width: 70
	},
	{
		field: 'product',
		headerName: 'Mahsulot nomi',
		type: 'text',
		width: 250,
	},
	{
		field: 'FirstCost',
		headerName: 'Tannarx',
		type: 'number',
		width: 200,
	},
	{
		field: 'SalePrice',
		headerName: 'Sotuv Narx',
		type: 'number',
		width: 200,
	},
];


const rows = [
	{
		id: 1,
		FirstCost: '15000$',
		SalePrice: "18000$",
		product: "Bitcoin1"
	},
	{
		id: 2,
		FirstCost: '13000$',
		SalePrice: "15000$",
		product: "Bitcoin2"
	},
	{
		id: 3,
		FirstCost: '14000$',
		SalePrice: "17500$",
		product: "Bitcoin"
	},
	{
		id: 4,
		FirstCost: '13300$',
		SalePrice: "15500$",
		product: "Bitcoin"
	},
	{
		id: 5,
		FirstCost: '13300$',
		SalePrice: "15500$",
		product: "Bitcoin"
	},
];

export {rows, columns}