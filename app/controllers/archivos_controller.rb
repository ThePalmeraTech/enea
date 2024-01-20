class ArchivosController < ApplicationController
  before_action :set_archivo, only: %i[show edit update destroy]

  # GET /archivos
  def index
    @archivos = Archivo.all
  end

  # GET /archivos/1
  def show
  end

  # GET /archivos/new
  def new
    @archivo = Archivo.new
  end

  # GET /archivos/1/edit
  def edit
  end

  # POST /archivos
  def create
    @archivo = Archivo.new(archivo_params)

    if @archivo.save
      redirect_to @archivo, notice: 'Archivo was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /archivos/1
  def update
    if @archivo.update(archivo_params)
      redirect_to @archivo, notice: 'Archivo was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /archivos/1
  def destroy
    @archivo.destroy
    redirect_to archivos_url, notice: 'Archivo was successfully destroyed.', status: :see_other
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_archivo
      @archivo = Archivo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def archivo_params
      params.require(:archivo).permit(:title, :user_id, :category_id, :vimeo_link, :photo, images: [])
    end
end
