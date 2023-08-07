from django.db import models

# Endereco
class Endereco(models.Model):
  rua = models.CharField(max_length=200, null=False, blank=False)
  numero = models.IntegerField(null=False, blank=False)
  complemento = models.CharField(max_length=200, null=True, blank=True)
  bairro = models.CharField(max_length=50, null=False, blank=False)
  cidade = models.CharField(max_length=100, null=False, blank=False)
  pais = models.CharField(max_length=50, null=False, blank=False)

  def __str__(self):
    return self.rua

# Entregador 
class Entregador(models.Model):
  SEXO_CHOICES = (
    ("F", "Feminino"),
    ("M", "Masculino"),
    ("N", "Nenhuma das opções")
  )

  """
  pedido = models.ForeignKey(
    'Pedido', 
    on_delete=models.CASCADE, 
    related_name='pedidos'
  )
  """

  nome = models.CharField(max_length=100, null=False, blank=False)
  data_nascimento = models.DateField(null=False, blank=False)
  email = models.EmailField(null=False, blank=False)
  profissao = models.CharField(max_length=50, null=False, blank=False)
  sexo = models.CharField(max_length=1, choices=SEXO_CHOICES, blank=False, null=False)
  cpf = models.IntegerField(null=False, blank=False)
  
  def __str__(self):
    return self.nome
    
# Cliente
class Cliente(models.Model):
  SEXO_CHOICES = (
    ("F", "Feminino"),
    ("M", "Masculino"),
    ("N", "Nenhuma das opções")
  )

  nome = models.CharField(max_length=100, null=False, blank=False)
  data_nascimento = models.DateField(null=False, blank=False)
  email = models.EmailField(null=False, blank=False)
  profissao = models.CharField(max_length=50, null=False, blank=False)
  sexo = models.CharField(max_length=1, choices=SEXO_CHOICES, blank=False, null=False)
  endereco = models.OneToOneField(
    Endereco,
    on_delete=models.SET_NULL,
    null=True
  )
  
  def __str__(self):
    return self.nome

# Pedido
class Pedido(models.Model):
  STATUS_CHOICES = (
    ("P", "Pedido realizado"),
    ("F", "Fazendo"),
    ("E", "Saiu para entrega"),
  )

  cliente = models.ForeignKey(
    'Cliente', 
    on_delete=models.CASCADE, 
    related_name='pedidos'
  )

  
  entregador = models.ForeignKey(
    'Entregador', 
    on_delete=models.CASCADE, 
    related_name='entregadores'
  )
  

  observacoes = models.CharField(max_length=300, null=False, blank=False)
  data_pedido = models.DateTimeField()
  valor = models.FloatField(blank=False, null=False)
  status = models.CharField(max_length=1, choices=STATUS_CHOICES, blank=False, null=False)

  def __str__(self):
    return self.cliente.nome
